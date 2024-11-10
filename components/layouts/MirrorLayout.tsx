'use client';
import Link from 'next/link';
import { useState } from 'react';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

const MirrorLayout = () => {
  const [mirror, setMirror] = useState('about');

  const sections = [
    { title: 'About', link: '/about' },
    { title: 'Work', link: '/work' },
    { title: 'Contact', link: '/contact' },
  ];

  const renderContent = () => {
    switch (mirror) {
      case 'about':
        return <About />;
      case 'work':
        return <Work />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <main className='min-h-screen w-full flex bg-blue-500p-10 max-md:p-3  max-md:flex-col'>
      <section
        className='flex flex-[1] flex-col justify-end gap-5  p-10 mt-10 max-lg: text-7xl
      max-xl:text-6xl 
      max-lg:text-5xl font-bold fixed max-md:hidden'
      >
        {sections.map((section) => (
          <Link
            key={section.title}
            href='#'
            className='tranimate'
            onClick={() => setMirror(section.title.toLowerCase())}
            style={{
              color: section.title.toLowerCase() === mirror ? 'black' : 'white',
            }}
          >
            <h2>{section.title}</h2>
          </Link>
        ))}
      </section>
      <div className='flex-[1]'></div>

      <section className='flex-[2] p-5 pt-0 tranimate overflow-y-auto'>
        {renderContent()}
      </section>
    </main>
  );
};

export default MirrorLayout;
