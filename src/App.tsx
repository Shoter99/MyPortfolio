import React from 'react';
import './App.css';
import ArrowUp from './utils/uparrow.svg';
import TitlePageBtn from './components/TitlePageBtn';

function App() {
  
  const goToTop = () => {
    const element = document.querySelector(`#home`)
    element?.scrollIntoView({behavior: 'smooth', block: 'center'})

  }
  
  


  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x">
      <section id="home" className='snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen'>
        <div className='text-center md:text-left'>
          <span className='md:text-7xl text-4xl text-neutral-700'>Dawid</span>
          <br />
          <span className='text-orange-500 text-5xl md:text-8xl'>Roszman</span>
        </div>
        <div className="flex md:block p-3 md:p-0">
          <TitlePageBtn text="Resume" link='aboutme' />
          <div className='p-2'></div>
          <TitlePageBtn link="projects" text="Projects" />
        </div>
      </section>
      <section id="aboutme" className='snap-start h-screen bg-neutral-700'>

      </section>
      <section id="projects" className='snap-start h-screen bg-neutral-200'>

      </section> 
          <button onClick={goToTop} className='transition duration-1000 absolute right-0 bottom-0 w-8 h-8 m-4 md:m-10 md:w-12 md:h-12 p-1 flex rounded-full justify-center items-center md:hover:w-14 md:hover:h-14'>
          <img src={ArrowUp} alt="Arrow Up"/>
          </button>
    </div>
  );
}

export default App;
