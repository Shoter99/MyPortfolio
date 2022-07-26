import React from 'react'

interface Props{
    values : {
        id: number,
        category: string,
        name: string,
        description: string,
        links: 
            {
                name: string,
                url: string,
            }[]
    }
}

const ProjectCard = (props : Props) => {
    return (
    <div className='border border-neutral-700 rounded flex flex-col md:flex-row justify-between md:items-center  text-neutral-200 bg-neutral-700'>
        <div className="md:w-[600px] p-10">
            <div className="md:flex justify-between">
                <h2 className="font-bold text-xl">{props.values.name}</h2>
                <br />
                <h3 className="font-bold text-xl">{props.values.category}</h3>
            </div>
            <br />
            <h3 className="text-justify">{props.values.description}</h3>
        </div>
        <div className="mx-4 h-[200px] rounded border-x-2 hidden md:block border border-slate-200 w-[0px]"></div>
        <div className='py-5 md:mt-0 px-10'>
            {props.values.links.map((val, id) => (
                <>
                    <h2>{val.name} 
                    <a target="_blank" rel="noreferrer" href={val.url} className='text-orange-500 italic pl-2'>here</a>
                    </h2>
                    <br />
                </>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard