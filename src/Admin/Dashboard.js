
import {React, useState} from 'react';
import LeftNavbar from './students/LeftNavbar';
import Header from './students/Header';
import { PiStudentFill } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineMenuBook } from "react-icons/md";
import 'react-circular-progressbar/dist/styles.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Dashboard = () => {
  const studentsPercentage = 50; 
  const instructorsPercentage = 30; 
  const coursesPercentage = 20;
  const [startDate, setStartDate] = useState(null);
  const [classStartDate, setClassStartDate] = useState(null);
 

  const pieData = {
    labels: ['Students', 'Instructors', 'Courses'],
    datasets: [
      {
        label: 'Progress',
        data: [studentsPercentage, instructorsPercentage, coursesPercentage],
        backgroundColor: ['#3182ce', '#ff6384', '#ffcd56'],
        hoverBackgroundColor: ['#2c5282', '#ff4d6d', '#ffb74d'],
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row" >
    
      <LeftNavbar  />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />
        <div className="flex flex-col p-6 space-y-6">
          <header className="flex-col items-center mb-6">
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <p className='mb-10'> Navigate the future of education with Shanti Academy</p>
            <div className="flex items-center space-x-10">
              <div className="flex bg-purple-200 rounded-xl w-80 p-4 transform transition-transform duration-300 hover:scale-110">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">Students</h3>
                  <p className="text-2xl">1000+</p>
                </div>
                <div className='flex items-center'>
                  <PiStudentFill style={{ fontSize: '2rem' }} />
                </div>
              </div>

              <div className="flex bg-blue-200 rounded-xl w-80 p-4 transform transition-transform duration-300 hover:scale-110 ">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">Instructor</h3>
                  <p className="text-2xl">40+</p>
                </div>
                <div className="flex items-center">
                  <GrUserWorker style={{ fontSize: '2rem' }} />
                </div>
              </div>

              <div className="flex bg-orange-200 rounded-xl w-80 p-4 transform transition-transform duration-300 hover:scale-110">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">Courses</h3>
                  <p className="text-2xl">10</p>
                </div>
                <div className="flex items-center">
                  <MdOutlineMenuBook style={{ fontSize: '2rem' }} />
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className=" text-2xl font-bold mb-4">Class Routine</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold">Start day</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Start class</label>
                  <DatePicker
                    selected={classStartDate}
                    onChange={(date) => setClassStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <select className="w-full p-2 border rounded">
                <option value="" disabled>Select class</option>
                 <option>MERN</option>
                  <option>Python</option>
                  <option>Digital Marketing</option>
                  <option>React</option>
                  <option>AI</option>
                </select>
                <button className="w-full p-2 bg-blue-300 text-black rounded shadow-md hover:bg-indigo-200 transition duration-300 ease-out hover:ease-in">Download routine (pdf)</button>
              </div>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Progress Overview</h2>
            <Pie data={pieData} />
          </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl flex  font-bold mb-4">Star Students</h2>
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Marks</th>
                    <th className="p-2 border">Percent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Lavisha </td>
                    <td className="p-2 border">PRE43178</td>
                    <td className="p-2 border">1185</td>
                    <td className="p-2 border">98%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Mahaveer</td>
                    <td className="p-2 border">PRE43174</td>
                    <td className="p-2 border">1165</td>
                    <td className="p-2 border">95%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Shivani </td>
                    <td className="p-2 border">PRE43187</td>
                    <td className="p-2 border">1175</td>
                    <td className="p-2 border">83%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Raghav</td>
                    <td className="p-2 border">PRE43187</td>
                    <td className="p-2 border">1175</td>
                    <td className="p-2 border">89%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Abhinay</td>
                    <td className="p-2 border">PRE43187</td>
                    <td className="p-2 border">1175</td>
                    <td className="p-2 border">92%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Aditi </td>
                    <td className="p-2 border">PRE43187</td>
                    <td className="p-2 border">1175</td>
                    <td className="p-2 border">99%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Total Exams</h2>
              <p className="text-xl">256</p>
              <a href="#" className="text-blue-500">View details</a>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Best Performers</h2>
              <div className="flex justify-center items-center h-32 bg-gray-200 rounded">Top students here</div>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">New Course</h2>
              <p className="mb-4">Build your career with API</p>
              <button className="w-full p-2 bg-blue-300 text-black rounded shadow-md hover:bg-indigo-200 transition duration-300 ease-out hover:ease-in">Enroll Now</button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;