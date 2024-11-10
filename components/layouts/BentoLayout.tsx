import Link from 'next/link';

const BentoLayout = () => {
  return (
    <section className='flex p-5 min-h-screen  w-full rounded-xl gap-5'>
      <div className='flex-[2] flex flex-col w-full gap-5'>
        <Link className='  rounded-xl flex-[1]' href='#'>
          <div className='p-5 bg-blue-500 '>Hi</div>
        </Link>
        <div className='flex flex-[2] gap-5'>
          <div className='flex-[1] flex flex-col gap-5'>
            <Link
              className='flex-[1]   rounded-xl'
              href='#'
            ></Link>
            <Link
              className='flex-[1]   rounded-xl'
              href='#'
            ></Link>
          </div>

          <Link className='flex-[1]   rounded-xl' href='#'></Link>
        </div>
      </div>

      <div className='flex-[1] flex flex-col gap-5 w-full'>
        <Link className='flex-[2]   rounded-xl' href='#'></Link>
        <Link className='flex-[1]   rounded-xl' href='#'></Link>
      </div>
    </section>
  );
};

export default BentoLayout;
