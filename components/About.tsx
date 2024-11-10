import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import twitter from '@/public/twitter.png';
import linkedin from '@/public/linkedin.png';
import github from '@/public/github.png';
import rdr2 from '@/public/rdr2.png';
import sabin from '@/public/sabin.jpg';
import { skills } from '@/lib/skills';
import TimeDisplay from './TimeDisplay';

const About = () => {
  return (
    <main className='max-w-[1320px] max-sm:p-2 p-5 pb-0  mt-0 w-full '>
      <h2 className='p-3  text-sm '>
        <span className='text-primary font-semibold'>Congratulations !!! </span>
        <span className='italic'>
          You have just discovered the perfect blend of creativity and code.
          Let’s build something amazing together!
        </span>
      </h2>

      <section className='flex flex-col w-full relative rounded-xl '>
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

            <button className='absolute bottom-0 right-0 px-6 py-2 ani-button water rounded-xl m-4 shadow-white shadow-sm max-lg:hidden font-semibold '>
              Hire Me
            </button>
          </div>

          <div className='flex-1 flex flex-col water    w-full h-full p-3'>
            <p className='text-sm  '>
              {' '}
              <span className=' font-semibold text-primary'>
                {' '}
                Listening to:{' '}
              </span>
              <span>DIE FOR YOU </span>
              <span className='italic text-xs'>The Weekend</span>
            </p>
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
              <Link target='_blank' href='https://github.com/masabinhok'>
                {' '}
                <Image
                  className='w-4 h-4 invert hover:opacity-70 tranimate '
                  src={github}
                  alt=''
                />
              </Link>
              <Link target='_blank' href='https://x.com/masabinhok'>
                {' '}
                <Image
                  className='w-4 h-4 invert  hover:opacity-70 tranimate '
                  src={twitter}
                  alt=''
                />
              </Link>
              <Link
                target='_blank'
                href='https://linkedin.com/in/sabinshresthaa'
              >
                {' '}
                <Image
                  className='w-4 h-4 invert hover:opacity-70 tranimate'
                  src={linkedin}
                  alt=''
                />
              </Link>
            </div>
          </div>
        </section>
        <Image
          className='w-36 absolute left-10 top-[150px] border-4 z-10 border-gray-200 h-36 rounded-full '
          src={sabin}
          alt='user'
        />
      </section>
      <section className='flex max-lg:flex-col justify-between w-full relative p-10 rounded-br-xl rounded-bl-xl water-reverse     '>
        <div className='mt-10 max-w-[300px]'>
          <h2 className='font-semibold text-primary'>Sabin Shrestha</h2>

          <p className='text-sm '>
            <span className='italic'>19</span>, Computer Engineering
            Undergraduate
          </p>
          <p className='text-sm underline cursor-pointer hover:text-primary tranimate'>
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
          <button className='absolute bottom-0 right-0 px-6 py-2 ani-button water rounded-xl m-4 shadow-white shadow-sm hidden max-lg:block font-bold '>
            Hire Me
          </button>
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
              <h2 className='italic text-sm'>{skill.title}</h2>
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

export default About;
