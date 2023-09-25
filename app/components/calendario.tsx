import React from 'react';
import Calendar from 'react-calendar';
import Header from './Header';
import 'react-calendar/dist/Calendar.css';
import Footer from './Footer';

const MyCalendar: React.FC = () => {
  return (
    <>
    <Header/>
    
    
    <main className='h-screen bg-slate-600'>
        <Calendar/>
    </main>
    <Footer/>
    
    </>
  );
};

export default MyCalendar;
