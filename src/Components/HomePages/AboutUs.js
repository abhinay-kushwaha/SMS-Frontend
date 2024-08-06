// import React, { useState, useEffect } from 'react';
// import shanti from '../../Assets/shanti.jpg';

// const AboutUs = () => {
//   const [currentSkill, setCurrentSkill] = useState('Website using Angular');
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     const skills = ['Website using Angular', 'Applications using Node.js', 'Applications using React'];
//     let currentIndex = 0;

//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         currentIndex = (currentIndex + 1) % skills.length;
//         setCurrentSkill(skills[currentIndex]);
//         setFade(false);
//       }, 500); // Time for fade transition
//     }, 3000); // Interval between skill changes

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center py-10">
//       <main className="flex-grow w-full">
//         <section className="flex flex-col items-center justify-center h-full relative">
//           <div className="relative mb-12 top-6">
//             <h1 className="text-9xl font-bold text-gray-100 z-10 relative">SKILLS</h1>
            
//             <h1 className="text-5xl font-medium text-indigo-400 absolute top-20 left-44 transform -translate-x-1/2 -translate-y-1/2 z-20">--Skills</h1>
//           </div>
//           <p className="mt-8 text-3xl text-gray-700 mb-11">
//             Over the course of years, falls after falls, we have mastered:
//           </p>
//           <div className="relative flex items-center justify-center">
//             <div className={`transition-transform duration-1000 ${fade ? 'transform -translate-y-full' : 'transform translate-y-0'}`}>
//               {currentSkill === 'Website using Angular' ? (
//                 <span className="text-5xl font-bold text-red-500">Website </span>
//               ) : currentSkill === 'Applications using Node.js' ? (
//                 <span className="text-5xl font-bold text-red-500">Applications </span>
//               ) : (
//                 <span className="text-5xl font-bold text-red-500">Applications </span>
//               )}
//             </div>
//             <span className="text-5xl font-bold text-black mx-2">using</span>
//             <div className={`transition-transform duration-1000 ${fade ? 'transform translate-y-full' : 'transform translate-y-0'}`}>
//               {currentSkill === 'Website using Angular' ? (
//                 <span className="text-5xl font-bold text-red-500">Angular</span>
//               ) : currentSkill === 'Applications using Node.js' ? (
//                 <span className="text-5xl font-bold text-red-500">Node.js</span>
//               ) : (
//                 <span className="text-5xl font-bold text-red-500">React</span>
//               )}
//             </div>
//           </div>
//           <p className="text-lg text-gray-700 mt-11">
//             Ask our clients and they will tell you.
//           </p>
//         </section>

//         {/* New Section */}
//         <section className="flex flex-col md:flex-row items-center mt-36 p-6 relative mb-64">
//           <div className="w-3/4 md:w-2/4 flex items-center justify-center bg-indigo-500 p-9">
//             <img src={shanti} alt="Group" className="w-full h-auto" />
//           </div>
//           <div className={`absolute top-36 right-0 w-full md:w-1/2 p-10 transform transition-transform duration-1000 ${fade ? 'translate-x-full' : 'translate-x-0'}`}>
//             <h2 className="text-2xl font-bold text-indigo-500 mb-4">WHAT MAKES US UNIQUE AND A PERFECT MATCH FOR YOU?</h2>
//             <h3 className="text-6xl font-bold text-indigo-500">100+</h3>
//             <p className="text-lg text-gray-700 mt-4">
//               Successfully catered to the requirement of clients.
//             </p>
//             <p className="text-lg text-gray-700 mt-4">
//               We are all about clients, we accommodate your requirements naturally and become an integral part of your mechanism. With our scrum/agile methodology, we have successfully catered to the requirements of 100+ clients to date.
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default AboutUs;


import React, { useState, useEffect } from 'react';
import shanti from '../../Assets/shanti.jpg';
import CountUp from 'react-countup';

const AboutUs = () => {
  const [currentSkill, setCurrentSkill] = useState('Website using Angular');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const skills = ['Website using Angular', 'Applications using Node.js', 'Applications using React'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % skills.length;
        setCurrentSkill(skills[currentIndex]);
        setFade(false);
      }, 500); // Time for fade transition
    }, 3000); // Interval between skill changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center py-10">
      <main className="flex-grow w-full">
        {/* Prebuilt platform features section */}
        <section className="flex flex-col items-center mt-36 p-6 mb-64">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Prebuilt platform features that drive massive </h2>
          <h2>adoption</h2>
          <div className="flex gap-36 items-center justify-center space-y-6">
            <div className="text-center">
              <h3 className="text-7xl font-bold text-slate-700 mb-10">
                <CountUp end={150} duration={3} suffix="<sup>%</sup>" />
              </h3>
              <p className="text-2xl text-black">Increase in User Engagement</p>
            </div>
            <div className="text-center">
              <h3 className="text-7xl font-bold text-slate-800 mb-10">
                <CountUp end={360} duration={3} suffix="<sup>+</sup>" />
              </h3>
              <p className="text-2xl text-black">Partner Sign-Ups</p>
            </div>
            <div className="text-center">
              <h3 className="text-7xl font-bold text-slate-900 mb-10">
                <CountUp end={20} duration={3} suffix="<sup>x</sup> " />
              </h3>
              <p className="text-2xl text-black">Beta Launch Revenue Projection</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center h-full relative">
          <div className="relative mb-12 top-6">
            <h1 className="text-9xl font-bold text-gray-100 z-10 relative">SKILLS</h1>
            <h1 className="text-5xl font-medium text-indigo-400 absolute top-20 left-44 transform -translate-x-1/2 -translate-y-1/2 z-20">--Skills</h1>
          </div>
          <p className="mt-8 text-3xl text-gray-700 mb-11">
            Over the course of years, falls after falls, we have mastered:
          </p>
          <div className="relative flex items-center justify-center">
            <div className={`transition-transform duration-1000 ${fade ? 'transform -translate-y-full' : 'transform translate-y-0'}`}>
              {currentSkill === 'Website using Angular' ? (
                <span className="text-5xl font-bold text-red-500">Website </span>
              ) : currentSkill === 'Applications using Node.js' ? (
                <span className="text-5xl font-bold text-red-500">Applications </span>
              ) : (
                <span className="text-5xl font-bold text-red-500">Applications </span>
              )}
            </div>
            <span className="text-5xl font-bold text-black mx-2">using</span>
            <div className={`transition-transform duration-1000 ${fade ? 'transform translate-y-full' : 'transform translate-y-0'}`}>
              {currentSkill === 'Website using Angular' ? (
                <span className="text-5xl font-bold text-red-500">Angular</span>
              ) : currentSkill === 'Applications using Node.js' ? (
                <span className="text-5xl font-bold text-red-500">Node.js</span>
              ) : (
                <span className="text-5xl font-bold text-red-500">React</span>
              )}
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-11">
            Ask our clients and they will tell you.
          </p>
        </section>

        {/* New Section */}
        <section className="flex flex-col md:flex-row items-center mt-36 p-6 relative mb-64">
          <div className="w-3/4 md:w-2/4 flex items-center justify-center bg-indigo-500 p-9">
            <img src={shanti} alt="Group" className="w-full h-auto" />
          </div>
          <div className={`absolute top-36 right-0 w-full md:w-1/2 p-10 transform transition-transform duration-1000 ${fade ? 'translate-x-full' : 'translate-x-0'}`}>
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">WHAT MAKES US UNIQUE AND A PERFECT MATCH FOR YOU?</h2>
            <h3 className="text-6xl font-bold text-indigo-500">
              <CountUp end={100} duration={3} suffix="+" />
            </h3>
            <p className="text-lg text-gray-700 mt-4">
              Successfully catered to the requirement of clients.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We are all about clients, we accommodate your requirements naturally and become an integral part of your mechanism. With our scrum/agile methodology, we have successfully catered to the requirements of 100+ clients to date.
            </p>
          </div>
        </section>

        
      </main>
    </div>
  );
}

export default AboutUs;

