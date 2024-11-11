'use client';
import Link from 'next/link';
import { useState } from 'react';
import Profile from '@/components/Profile';
import Work from '@/components/Work';
import Connect from '@/components/Connect';

const MirrorLayout = () => {
  const [mirror, setMirror] = useState('profile');

  const sections = [
    { title: 'Profile' },
    { title: 'Work' },
    { title: 'Connect' },
  ];

  const renderContent = () => {
    switch (mirror) {
      case 'profile':
        return <Profile />;
      case 'work':
        return <Work />;
      case 'connect':
        return <Connect />;
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
            className={`tranimate ${
              section.title.toLowerCase() === mirror
                ? 'text-accent'
                : 'text-text'
            }`}
            onClick={() => setMirror(section.title.toLowerCase())}
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
