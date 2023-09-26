// pages/index.tsx
import React from 'react';
import Card from './card';

export default function Home() {
  return (
    <section>
      <div className='container mx-auto text-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-red-700  rounded-lg shadow-md'>
      <Card
        imageSrc="/img1.jpg"
        title="Mercedes"
        description="t componentiado essa merda"
      />
      <Card
        imageSrc="/img9.jpg"
        title="uma Ferrari"
        description="ta componentizado essa merda"
        
      />
      
    </div>
    </section>
  )
}