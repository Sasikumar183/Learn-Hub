import React, { useState, useEffect } from 'react';
import '../App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    course: '',
    status: '',
  });
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    
    if (storedStudents.length === 0) {
      const initialStudents = [
        { name: 'Srivasan', role: 'Developer', email: 'srivasan@gmail.com', phone: '123-456-7890', course: 'React Basics', status: 'Placed' },
        { name: 'Mohanapriya', role: 'Designer', email: 'mohanapriya@gmail.com', phone: '098-765-4321', course: 'UI/UX Design', status: 'Unplaced' },
        { name: 'Lokesh', role: 'Designer', email: 'lokesh@gmail.com', phone: '098-765-4321', course: 'UI/UX Design', status: 'Unplaced' },
        { name: 'Rajesh', role: 'Developer', email: 'rajesh@gmail.com', phone: '123-456-7890', course: 'React Basics', status: 'Placed' },
        { name: 'Wazeer', role: 'Designer', email: 'wazeer@gmail.com', phone: '098-765-4321', course: 'UI/UX Design', status: 'Unplaced' },
        { name: 'Hema Chithra', role: 'Developer', email: 'hemachithra@gmail.com', phone: '123-456-7890', course: 'React Basics', status: 'Placed' },
        { name: 'Jenitraj', role: 'Designer', email: 'jenitraj@gmail.com', phone: '098-765-4321', course: 'UI/UX Design', status: 'Unplaced' },
        { name: 'Nandha Kumar', role: 'Developer', email: 'nandhakumar@gmail.com', phone: '123-456-7890', course: 'React Basics', status: 'Placed' },
        { name: 'Dharani', role: 'Designer', email: 'dharani@gmail.com', phone: '098-765-4321', course: 'UI/UX Design', status: 'Unplaced' },
        { name: 'Sriram', role: 'Designer', email: 'sriram@gmail.com', phone: '098-765-4321', course: 'UI/UX Design', status: 'Placed' }
      ];
      localStorage.setItem('students', JSON.stringify(initialStudents));
      setStudents(initialStudents);
    } else {
      setStudents(storedStudents);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.email || !formData.phone || !formData.course || !formData.status) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedStudents = [...students, formData];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setFormData({ name: '', role: '', email: '', phone: '', course: '', status: '' });
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <div className="bg-black formi min-h-screen flex flex-col items-center p-4 py-12">
      <form onSubmit={handleSubmit} className="text-[rgb(201,253,2)] w-full p-8 rounded-lg">
        <h2 className="text-center text-[rgb(201,253,2)] text-3xl font-extrabold mb-10">Fill This Form</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['name', 'role', 'email', 'phone'].map((field) => (
            <div key={field} className="flex flex-col w-full">
              <label htmlFor={field} className="mb-2 capitalize">{field}:</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full px-4 py-3 bg-gray-100 border-b border-gray-600 rounded focus:outline-none focus:border-indigo-500 hover:bg-gray-200 transition duration-200 text-black"
              />
            </div>
          ))}
          
          <div className="flex flex-col w-full">
            <label htmlFor="course" className="mb-2">Course:</label>
            <select
              id="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 text-black font-thin border-b border-gray-600 rounded focus:outline-none focus:border-indigo-500 hover:bg-gray-200 transition duration-200"
            >
              <option value="" disabled>Select a course</option>
              <option value="React Basics">React Basics</option>
              <option value="Backend Development">Backend Development</option>
              <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Advanced CSS">Advanced CSS</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="status" className="mb-2">Status:</label>
            <select
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border-b font-thin text-black border-gray-600 rounded focus:outline-none focus:border-indigo-500 hover:bg-gray-200 transition duration-200"
            >
              <option value="" disabled>Select status</option>
              <option value="Placed">Placed</option>
              <option value="Unplaced">Unplaced</option>
            </select>
          </div>
        </div>

        <div className="text-right mt-8">
          <button
            type="submit"
            className="px-6 py-2 bg-black hover:bg-[rgb(201,253,2)] text-white font-bold border border-white rounded-3xl"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xl justify-center items-center place-items-center">
          {students.map((student, index) => (
            <div key={index} className="space-y-3 text-xl p-7 w-[90%] bg-white text-black rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-[rgb(201,253,2)] flex items-center justify-center text-lg font-bold text-white">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <h4 className="ml-2 font-bold">{student.name}</h4>
              </div>
              <p><strong>Role:</strong> {student.role}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Status:</strong> {student.status}</p>
              <button onClick={() => handleDelete(index)} className="mt-2 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
