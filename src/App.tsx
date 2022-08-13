import React, { useEffect } from 'react';
import './App.css';
import ArrowUp from './utils/uparrow.svg';
import TitlePageBtn from './components/TitlePageBtn';
import ProjectCard from './components/ProjectCard';
import { projects } from './utils/text'

function App() {
  
  const goToTop = () => {
    const element = document.querySelector(`#home`)
    element?.scrollIntoView({behavior: 'smooth', block: 'start'})

  }
  
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <section id="home" className='snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen'>
        <div className='text-center md:text-left tracking-[.25rem]'>
          <span className='md:text-7xl text-4xl text-neutral-700'>Dawid</span>
          <br />
          <span className='text-orange-400 text-5xl md:text-8xl'>Roszman</span>
        </div>
        <div className="flex md:block p-3 md:p-0">
          <TitlePageBtn text="Resume" link='aboutme' />
          <div className='p-2'></div>
          <TitlePageBtn link="projects" text="Projects" />
        </div>
      </section>
      <section id="aboutme" className='snap-start h-screen bg-neutral-700 flex flex-col items-center p-4 md:p-10'>
      <h1 className="text-neutral-200 font-bold text-3xl md:text-6xl">About me</h1>
      <div className='text-neutral-200 md:w-[60%] md:m-10 border-neutral-200 md:p-8 p-2 mt-4 rounded border-2 overflow-auto'>
        <h2 className='md:text-3xl '>Hi!</h2>
        <br />
        <h3 className='md:text-xl text-justify'>
          My name is Dawid and I have been learning programming for a couple of years now. My journey started with 
          <span className='text-orange-400'> C++</span> then I learned basics of 
          <span className='text-orange-400'> HTML</span>, 
          <span className='text-orange-400'> CSS</span>, 
          <span className='text-orange-400'> JavaScript</span> and 
          <span className='text-orange-400'> PHP</span>. After these I switched to 
          <span className='text-orange-400'> Python</span> and learned language and frameworks like 
          <span className='text-orange-400'> Flask</span> and 
          <span className='text-orange-400'> Django</span>. I also took part in a few game jams and used engines like 
          <span className='text-orange-400'> Unity</span> or 
          <span className='text-orange-400'> Godot</span>. I had contact with Mobile Development and 
          <span className='text-orange-400'> React Native</span> as well. Currently I am learning 
          <span className='text-orange-400'> ReactJS</span>.
          <br />
          <br className='hidden md:block'/>
          <div className='md:flex text-center md:text-left'>
          <div>
            My CV
          </div>
          <span className='md:block hidden px-2'> - </span>
          <div>
          <a href={process.env.PUBLIC_URL + '/CV.pdf'} target='_blank' rel='noreferrer' className='text-orange-400 underline cursor-pointer'>Polish</a>

          
          <span className='px-2'> | </span>

          <a href="https://resume.io/r/O93tWGpTz" target='_blank' rel='noreferrer' className='text-orange-400 underline cursor-pointer'> English</a>
          </div>
          </div>
          <div className='text-center md:text-left'>
            <a href="https://www.github.com/Shoter99" target="_blank" rel='noreferrer' className='text-orange-400 underline cursor-pointer'>My Github</a>

          </div>
        </h3>
      </div>
      </section>
      <section id="projects" className='snap-start min-h-screen bg-neutral-200 p-4 md:p-10 flex flex-col items-center'>
          <h1 className="text-neutral-700 font-bold text-3xl md:text-6xl">My Projects</h1>
          <div className="grid grid-cols-1 gap-5 mt-10">
            {projects.map((val, index) => (
              <ProjectCard key={index} values={val}/>
            )

            )}
          </div>
          <div className='mt-5'>More projects can be found on my <a className='text-orange-500 underline' target='_blank' rel='noreferrer' href="https://www.github.com/Shoter99">Github</a></div>
      <div className="pt-16"></div>
      </section> 
          <button onClick={goToTop} className='transition duration-700 absolute right-0 bottom-0 w-8 h-8 m-4 md:m-10 md:w-12 md:h-12 p-1 flex rounded-full justify-center items-center hover:-translate-y-5'>
          <img src={ArrowUp} alt="Arrow Up"/>
          </button>
    </div>
  );
}

export default App;
