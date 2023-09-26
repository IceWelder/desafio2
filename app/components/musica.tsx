"use client"
import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    const audioElement = new Audio('/assets/f1 music.mp3');
    
    
    audioElement.play().catch(error => {
      
      console.error('Erro ao reproduzir música:', error);
    });
    
    
    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);

  return (
    <div>
      
      <h1></h1>
      
    </div>
  );
}

export default HomePage;
