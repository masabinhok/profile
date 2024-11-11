'use client';

const HireMe = ({ hidden }: { hidden: string }) => {
  return (
    <button
      className={`absolute bottom-0 right-0 px-6 py-2 ani-button water rounded-xl m-4 shadow-white text-accent shadow-sm  font-semibold
        ${hidden === 'md' ? 'max-lg:hidden' : 'hidden max-lg:block'}
        `}
    >
      Hire Me
    </button>
  );
};

export default HireMe;
