import { projects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';

const Work = () => {
  return (
    <main className='max-w-[1320px] max-sm:p-2 p-5 pb-0  mt-0 w-full mb-5 '>
      <h2 className='py-3 text-sm border-b-2'>
        <span className='text-accent font-semibold'>My Works</span>
        <span className='italic'>
          {' '}
          This section showcases the projects that have challenged, inspired,
          and defined my journey as a full stack developer. Dive in and explore
          the solutions I have crafted and the stories behind them.
        </span>
      </h2>
      <section className='mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5'>
        {projects.map((project) => (
          <div
            className='border-b-2  water rounded-xl p-5 '
            key={project.title}
          >
            <div className='flex  aspect-[16/9] -m-5 h-fit mb-5 overflow-hidden flex-wrap'>
              <Image
                className='rounded-tr-xl rounded-tl-xl'
                src={project.imageURL}
                alt={project.title}
              />
            </div>

            <h2 className='font-bold text-primary'>{project.title}</h2>
            <p className='text-sm line-clamp-1 mb-5'>{project.context}</p>
            <div className='flex flex-wrap font-semibold text-sm gap-2 mb-2 italic text-accent '>
              {project.techStack.map((stack) => (
                <div key={stack}>{stack}</div>
              ))}
            </div>

            <div className='flex justify-between  items-center '>
              <Link
                className='flex gap-2 items-center'
                href={project.githubLink}
              >
                <span className='text-sm underline'>Github</span>
              </Link>

              <div className='flex gap-4 underline'>
                {' '}
                <Link href={project.demoLink}>
                  <h2 className='text-sm italic text-primary'>Demo</h2>
                </Link>
                <Link href={project.overviewLink}>
                  <h2 className='text-sm italic text-primary'>
                    Project Overview
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Work;
