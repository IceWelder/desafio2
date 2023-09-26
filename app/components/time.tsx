"use client"
import { useState, useEffect } from 'react';


const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = time % 60 < 10 ? `0${time % 60}` : time % 60;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="bg-red-700 text-white py-2 px-4 rounded-lg">
      <p className="text-2xl font-bold item justify-center">Cronômetro</p>
      <p className="text-4xl font-bold">{formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
