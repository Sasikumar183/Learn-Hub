import React from 'react'
import Dash from '../assets/img/AboutDashboard.png'
import Im1 from '../assets/logo/medal.png'
import Im2 from '../assets/logo/thought.png'
import Im3 from '../assets/logo/training.png'

const Service = () => {
  return (
    <div className="bg-black px-4 py-10"> 
        <div className="flex flex-col items-center justify-center text-center">
            <p className="font-semibold text-[rgb(125,211,252)]">Open Source Theme and UI Components</p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white max-w-3xl mt-4 mb-8">Geaux Astro helps you craft beautiful websites efficiently</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-around items-center mx-auto mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="flex flex-col space-y-10 max-w-md text-white">
                <div className="flex gap-3 items-start">
                    <img src={Im1} alt="" width={36} height={36} />
                    <div>
                        <p className="text-xl font-semibold mb-2">Certificate Distribution</p>
                        <p className="text-gray-400">We offer certificates to validate and recognize your achievement.</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <img src={Im2} alt="" width={36} height={36} />
                    <div>
                        <p className="text-xl font-semibold mb-2">Knowledge</p>
                        <p className="text-gray-400">We deliver transformative knowledge that empowers and inspires.</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <img src={Im3} alt="" width={36} height={36} />
                    <div>
                        <p className="text-xl font-semibold mb-2">Hands-on Experience</p>
                        <p className="text-gray-400">We provide hands-on experience for real-world learning. You learn best by doing.</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:max-w-lg">
                <img src={Dash} alt="Dashboard" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
  )
}

export default Service
