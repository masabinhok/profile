'use client';
import React, { useEffect, useState } from 'react';
import { getExperiencedTime } from '@/lib/utils';

const TimeDisplay: React.FC<{ dateString: string }> = ({ dateString }) => {
  const [time, setTime] = useState(getExperiencedTime(dateString));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTime(getExperiencedTime(dateString));
    }, 1000);

    return () => clearInterval(interval);
  }, [dateString]);

  if (!mounted) {
    return <span className='flicker'>...</span>;
  }

  return (
    <span className='italic font-normal  text-accent'>
      {time.days} days, {time.hours} hours, {time.minutes} minutes and{' '}
      {time.seconds < 10 ? '0' + time.seconds : time.seconds} seconds
    </span>
  );
};

export default TimeDisplay;
