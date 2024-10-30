import React from 'react';
import '../App.css';
import Im1 from '../assets/img/airbnb.png';
import Im2 from '../assets/logo/client-8.png';
import Im3 from '../assets/logo/lifegroups.png';
import Im4 from '../assets/logo/myob.png';
import Im5 from '../assets/img/tailus.png';
import Im6 from '../assets/img/microsoft.png';
import Im7 from '../assets/img/coty.png';
import Im8 from '../assets/img/lilly.png';

const Partner = () => {
  return (
    <div className='custom-gradient'>
      <div>
        <h2 className='font-bold text-white text-[2rem] sm:text-[3rem] text-center p-5 pt-20'>Our Placement Partners</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center">
        <img src={Im1} alt="Airbnb" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im2} alt="Client 8" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im3} alt="Life Groups" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im4} alt="MYOB" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im5} alt="Tailus" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im6} alt="Microsoft" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im7} alt="Coty" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
        <img src={Im8} alt="Lilly" className="w-[8rem] sm:w-[10rem] h-auto object-cover rounded-lg" />
      </div>
      <div className='py-10'>
        <button className='bg-[rgb(201,253,2)] flex mx-auto px-8 sm:px-10 py-1 w-[9rem] sm:w-[11rem] leading-6 rounded-full text-[0.9rem] sm:text-[1rem] text-center'>
          And, More Companies
        </button>
      </div>
    </div>
  );
}

export default Partner;
