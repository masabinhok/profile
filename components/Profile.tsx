import Link from 'next/link';
import Image from 'next/image';
import rdr2 from '@/public/rdr2.png';
import sabin from '@/public/sabin.jpg';
import { skills } from '@/lib/skills';
import TimeDisplay from './TimeDisplay';
import { socials } from '@/lib/socials';
import HireMe from './HireMe';
import { Download } from 'lucide-react';

const Profile = () => {
  return (
    <main className='max-w-[1320px] max-sm:p-2 p-5 pb-0  mb-5 w-full '>
      <h2 className='py-3 text-sm border-b-2'>
        <span className='text-accent font-semibold'>Welcome!</span>
        <span className='italic'>
          {' '}
          Get to know me and what I can bring to the table.
        </span>
      </h2>

      <section className='flex flex-col w-full relative rounded-xl mt-5 '>
        <section className='w-full flex  h-[240px] border-b-2  '>
          <div className='flex-1 flex flex-col water border-r-2 gap-3   w-full h-full p-3 relative'>
            <p className='text-sm  '>
              {' '}
              <span className=' font-semibold text-primary'>
                {' '}
                Freelancer from:{' '}
              </span>
              <span>Kathmandu, Nepal</span>
            </p>
            <p className='text-sm  '>
              {' '}
              <span className=' font-semibold text-primary'> Studies at: </span>
              <span>IOE, Pulchowk Campus</span>
            </p>
            <p className='text-sm  '>
              {' '}
              <span className=' font-semibold text-primary'>
                {' '}
                Looking for:{' '}
              </span>
              <span>Internships/ Remote Job</span>
            </p>
            <HireMe hidden={'md'} />
          </div>

          <div className='flex-1 flex flex-col water    w-full h-full p-3'>
            <p className='text-sm  p-2 '>
              <span className=' font-semibold text-primary'>Playing: </span>{' '}
              <Image className='w-36 h-auto' src={rdr2} alt='' />
            </p>
            <p className='text-sm  p-2 '>
              <span className=' font-semibold text-primary'>Watching: </span>{' '}
              <Link
                href='https://cineb.rs/tv/watch-from-free-77455'
                target='blank'
              >
                <span className='hover:underline '>FROM</span>
              </Link>
            </p>
            <div className='flex items-center gap-3 p-2'>
              <p className='text-sm font-semibold text-primary'> Socials: </p>
              {socials.map((social) => (
                <Link key={social.name} target='_blank' href={social.href}>
                  {' '}
                  <Image
                    className='w-4 h-4 max-sm:w-3 max-sm:h-3 invert hover:opacity-70 tranimate '
                    src={social.image}
                    alt=''
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className='group'>
          {' '}
          <Image
            className='w-36 absolute left-10 top-[150px] border-4 z-10 max-sm:w-24 max-sm:h-24 border-gray-200 h-36 rounded-full max-sm:top-[200px]  '
            src={sabin}
            alt='user'
          />
          <h2 className='absolute hidden  group-hover:block text-sm text water border-b-2  px-6 py-2 rounded-xl  text- z-20 left-2 cursor-default tranimate top-[195px]'>
            Ik, i have to click a good one.
          </h2>
        </div>
      </section>
      <section className='flex max-lg:flex-col justify-between w-full relative p-10 rounded-br-xl rounded-bl-xl water-reverse     '>
        <div className='mt-10 max-w-[300px]'>
          <h2 className='font-semibold text-primary'>Sabin Shrestha</h2>

          <p className='text-sm '>
            <span className='italic'>19</span>, Computer Engineering
            Undergraduate
          </p>
          <p className='text-sm underline cursor-pointer hover:text-primary tranimate text-accent '>
            <a href='mailto:shrestha.sabin.er@gmail.com?subject=Hello%20from%20your%20website&body=I%20wanted%20to%20reach%20out%20to%20you.'>
              sabin.shrestha.er@gmail.com
            </a>
          </p>
        </div>
        <div className='mt-10  text-sm max-w-[240px]'>
          <p>
            {' '}
            <span className='font-semibold text-primary '>Skills: </span>
            FullStack Web development | MERN | NEXTjs |
          </p>
          <p className='text-sm  flex items-center gap-2 cursor-pointer  hover:underline group '>
            <span className='font-semibold text-primary'> Resume: </span>
            <span className='underline  flex items-center gap-1 '>
              <Download className='w-4 ' />
            </span>
          </p>
          <HireMe hidden={'lg'} />
        </div>
      </section>
      <section className='flex flex-col p-10 rounded-xl  relative water mt-10 border-b-2'>
        <h2 className='mb-5 font-semibold text-primary  '>
          I am <TimeDisplay dateString='2024-01-01T00:00:00' /> experienced
          with...
        </h2>
        <div className='flex-wrap flex gap-3 w-full '>
          {skills.map((skill) => (
            <Link key={skill.title} href={skill.link}>
              <h2 className='italic hover:text-primary tranimate text-sm'>
                {skill.title}
              </h2>
            </Link>
          ))}
        </div>
        <h2 className='mt-5  text-sm  text-primary'>
          yeah I know, just flexing a timer
        </h2>
      </section>
    </main>
  );
};

export default Profile;
