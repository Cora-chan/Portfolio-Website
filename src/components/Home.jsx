import React from 'react'
import {HiArrowNarrowRight} from 'react-icons'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Yue Kang </h1>
            <p className='text-[#ccd6f6]'>(Yue is pronunced as "Yueh")</p>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">I am a full-stack developer specializing in building digital experiences. Currently, I am focused on building responsive full-stack web applications.</p>
            <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work</button>
        </div>
        </div>
       
    </div>
  )
}

export default Home