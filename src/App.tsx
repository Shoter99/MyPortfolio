import React from 'react';
import './App.css';
import TitlePageBtn from './components/TitlePageBtn';

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x">
      <section id="home" className='snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen'>
        <div className='text-center md:text-left'>
          <span className='md:text-7xl text-4xl text-neutral-700'>Dawid</span>
          <br />
          <span className='text-orange-500 text-5xl md:text-8xl'>Roszman</span>
        </div>
        <div className="flex md:block p-3 md:p-0">
          <TitlePageBtn text="Projects" />
          <div className='p-2'></div>
          <TitlePageBtn text="Resume" />
        </div>
      </section>
      <section id="aboutme" className='snap-start h-screen bg-neutral-700'>

      </section>
      <section id="projects" className='snap-start h-screen bg-neutral-200'>

      </section>
      
    </div>
  );
}

export default App;
