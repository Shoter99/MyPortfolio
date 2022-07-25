import React from 'react';
import './App.css';
import TitlePageBtn from './components/TitlePageBtn';

function App() {
  return (
    <div>
      <div className='flex direction-row justify-evenly items-center h-screen'>
        <div>
          <span className='text-7xl text-neutral-700'>Dawid</span>
          <br />
          <span className='text-orange-500 text-8xl'>Roszman</span>
        </div>
        <div>
          <TitlePageBtn text="Projects" />
          <div className='p-2'></div>
          <TitlePageBtn text="Resume" />
        </div>
      </div>
    </div>
  );
}

export default App;
