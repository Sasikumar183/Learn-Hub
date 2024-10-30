import React from 'react'
import '../App.css'

const Hero = () => {
  return (
    <div className=' hero'>
        <div>
        <p className='text-white text-7xl'><br /></p>
            <div className='mt-10 flex flex-col gap-8 items-center justify-center w-min-[60%] w-max-[95%] lg:w-[60%] mx-auto'>
                <div className='text-white text-4xl lg:text-7xl font-bold py-10'>
                    <h2 className='text-center'>Learn from the best, be
                    you best..</h2>
                </div>
                <div className='text-gray-700 text-l lg:text-xl '>
                    <p className='text-center'>Give yourself an upgrade with our inspiring online courses and join a global community of learners</p>
                </div>
                <div className='mb-10'>
                    <button className='bg-yellow-400 font-bold p-4 rounded-full'>Get Started</button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Hero