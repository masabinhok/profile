'use client';
import { Pause, Play } from 'lucide-react';
import { useState, useRef } from 'react';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        localStorage.setItem('isPlaying', JSON.stringify(isPlaying));
      } else {
        audio.play();
        setIsPlaying(true);
        localStorage.setItem('isPlaying', JSON.stringify(isPlaying));
      }
    }
  };

  return (
    <div className='absolute top-0 right-2 p-1'>
      <p onClick={handleMusic} className='text-sm cursor-pointer'>
        <span className='font-semibold text-primary'>Music: </span>
        <span>Dil Basyo </span>
        <span className='italic text-xs'>
          Bakemono (cover)
          {isPlaying ? (
            <Pause className='inline w-4 m-1' />
          ) : (
            <Play className='inline w-4 m-1' />
          )}
        </span>
      </p>
      <audio ref={audioRef}>
        <source src='/dil_basyo.mp3' type='audio/mp3' />
      </audio>
    </div>
  );
};

export default Music;
