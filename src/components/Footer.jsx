import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    const [student, setStudent] = useState(0);
    const [plstudent, setplsStudent] = useState(0);
    const [uplstudent, setuplStudent] = useState(0);
    
    return (
        <div className="bg-black text-white px-4 lg:px-10 py-10">
            
                
                <div className="flex flex-col items-center mt-10 space-y-4">
                    <h2 className="text-[rgb(201,253,2)] text-4xl font-bold">LearnHub</h2>
                    <p className="text-gray-500 text-sm">© 2022 Tailwind Labs Inc. All rights reserved.</p>
                    <div className="flex space-x-4 text-sm">
                        <Link to='/admin' className="hover:text-yellow-400">Form</Link>
                        <span className="text-gray-500">|</span>
                        <a href="#" className="hover:text-yellow-400">Notes</a>
                    </div>
                </div>
            
        </div>
    )
}

export default Footer
