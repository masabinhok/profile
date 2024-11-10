'use client';
import React, { useEffect, useState } from 'react';
import { getExperiencedTime } from '@/lib/utils';

const TimeDisplay: React.FC<{ dateString: string }> = ({ dateString }) => {
  const [time, setTime] = useState(getExperiencedTime(dateString));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getExperiencedTime(dateString));
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [dateString]);

  return (
    <span className='italic font-light text-accent'>
      {time.days} days, {time.hours} hours, {time.minutes} minutes and{' '}
      {time.seconds < 10 ? '0' + time.seconds : time.seconds} seconds
    </span>
  );
};

export default TimeDisplay;
