import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';


export default function MyCalendar() {
  return (
    <section>
      
    <main className='h-screen bg-slate-600 p-8'>
        <Calendar/>
    </main>
    </section>
  )
}
