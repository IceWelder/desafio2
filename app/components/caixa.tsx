// pages/index.tsx
import React from 'react';
import Card from './Card';

export default function Home() {
  return (
    <section>
      <div>
      <Card
        imageSrc="/img1.jpg"
        title="Mercedes"
        description="t componentiado essa merda"
      />
      <Card
        imageSrc="/img2.jpg"
        title="uma Ferrari"
        description="ta componentizado essa merda"
      />
      
    </div>
    </section>
  )
}