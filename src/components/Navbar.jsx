import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black'>
      <br />
      <nav className='flex flex-row justify-between items-center mx-auto w-[85%] h-12 ml-[10%] p-6 py-8 bg-black/80 backdrop-blur-md text-white rounded-2xl border-2 border-gray-300 border-opacity-100 fixed shadow-md'>
        <div>
          <Link to='/' className='text-[rgb(201,253,2)] font-extrabold text-2xl p-2'>LearnHub</Link>
        </div>
        <div>
          <Link to='/admin' className='text-sm p-2'>Admin</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
