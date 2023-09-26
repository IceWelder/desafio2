"use client"
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className='w-[200px] h-[150px] bg-gray-400 p-5 rounded-lg flex flex-col justify-center items-center text-sm font-bold ml-[42vw] gap-5 my-5'>
      <h1>Contador: {count}</h1>
      <button onClick={incrementCounter} className='bg-slate-200 p-4 rounded-lg '>CLIQUE AQUI!!</button>
    </div>
  );
};

export default Counter;
