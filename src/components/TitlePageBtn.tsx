import React from 'react'

const TitlePageBtn = ({ text }: { text: string }) => {
    return (
        <button className='border rounded border-neutral-700 p-3 border-2 text-neutral-700 hover:text-neutral-200 hover:bg-neutral-700 transition duration-500'>
            <span className='font-bold md:text-3xl'>{text}</span>
        </button>
    )
}

export default TitlePageBtn