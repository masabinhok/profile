'use client';

const HireMe = ({ hidden }: { hidden: string }) => {
  return (
    <button
      className={` group absolute bottom-0 right-0 px-6 py-2 ani-button water rounded-xl m-4 shadow-white text-accent shadow-sm  font-semibold tranimate 
        ${hidden === 'md' ? 'max-lg:hidden' : 'hidden max-lg:block'}
        `}
    >
      Hire Me
      <h2 className='group-hover:block hidden absolute text-sm font-normal text-primary -top-7 flicker'>
        Click it
      </h2>
    </button>
  );
};

export default HireMe;
