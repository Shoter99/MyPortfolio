import React from 'react'
const ProjectCard = () => {
    return (
    <div className='border border-neutral-700 rounded flex flex-col md:flex-row justify-between md:items-center  text-neutral-200 bg-neutral-700'>
        <div className="md:w-[600px] p-10">
            <h2 className="font-bold text-xl">Project Name</h2>
            <br />
            <h3 className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad similique libero, sed laudantium, nemo id dolor molestias pariatur voluptates dolorem exercitationem! In odio blanditiis cupiditate! Suscipit iste doloremque ab!</h3>
        </div>
        <div className="mx-4 h-[200px] rounded border-x-2 hidden md:block border border-slate-200 w-[0px]"></div>
        <div className='py-5 md:mt-0 px-10'>
            <h2>Check on Github 
            <a href='https://www.github.com/Shoter99' className='text-orange-500 italic pl-2'>here</a>
            </h2>
            <br />
            <h2>Live Version
            <a href='https://www.github.com/Shoter99' className='text-orange-500 italic pl-2'>here</a>
            </h2>
            <br />
        </div>
    </div>
  )
}

export default ProjectCard