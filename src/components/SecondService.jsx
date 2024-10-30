import React, { useState, useEffect } from 'react';

const SecondService = () => {
  const [studentCounts, setStudentCounts] = useState({
    total: 0,
    placed: 0,
    unplaced: 0
  });

  useEffect(() => {
    // Retrieve students data from localStorage
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    
    // Calculate student counts
    const total = storedStudents.length;
    const placed = storedStudents.filter(student => student.status === 'Placed').length;
    const unplaced = total - placed;

    setStudentCounts({ total, placed, unplaced });
  }, []);

  return (
    <div className='bg-black text-white px-4 lg:px-10 py-10'>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Introduction Text */}
        <div className="font-bold text-left">
          <h2 className="text-[rgb(52,148,92)] text-3xl lg:text-5xl mb-4">Empower your future with cutting-edge skills</h2>
          <h2 className="text-[rgb(14,165,233)] text-3xl lg:text-5xl mb-4">Embrace innovation, master technology, & shape the digital world</h2>
          <h2 className="text-[rgb(220,38,38)] text-3xl lg:text-5xl mb-4">Your journey to success starts here.</h2>
        </div>
        
        {/* Course Description and Stats */}
        <div className="w-full">
          <p className="mt-0 lg:mt-[-10rem] mb-10 text-xl w-[90%]">
            Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.
          </p>
          <div className="flex justify-center lg:justify-start text-center text-xl space-x-4">
            
            {/* Student Statistics */}
            {[
              { label: 'Total Students', count: studentCounts.total },
              { label: 'Placed Students', count: studentCounts.placed },
              { label: 'Unplaced Students', count: studentCounts.unplaced }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="bg-[rgb(201,253,2)] text-black px-2 py-0.5 rounded-full">{item.label}</p>
                <h3 className="text-3xl font-bold">{item.count}</h3>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondService;
