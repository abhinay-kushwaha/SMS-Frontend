import React from 'react'
import pooja from "../../Assets/lavisha.jpg"
import ajeet from "../../Assets/maha.jpeg"
import sachin from "../../Assets/sachin.jpeg"

const WhatOurTwo = () => {
  return (
    <>
      <h1 className='text-2xl sm:text-5xl font-bold text-center mt-7 mb-5'>Meet Our Instructors</h1>
      <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4 mt-4'>Our faculty are all professionaly qualified and have rich indursty experince , essential for giving a practical context to </p>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 m-4 p-4'>
      <div className='flex flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl transition transform hover:-translate-y-1 hover:shadow-lg'>
        <h1 className='font-bold text-xl'>Mahaveer Mandloi</h1>
        <img className='w-44 rounded-full h-44 border-2 border-pink-400' src={ajeet}/>
        <p className='text-center'>Dr. Mahaveer, an MTech instructor . from MIT, specializes in AI, software engineering, data science, and cybersecurity. With extensive experience at Google and IBM, he brings real-world insights to his courses. His teaching emphasizes interactive learning and practical application. Dr. Mahaveer is recognized as an IEEE Fellow and has received numerous awards for his contributions to cyber.</p>
        <h2 className='font-bold text-md'>MTech in  Cyber</h2>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl transition transform hover:-translate-y-1 hover:shadow-lg'>
        <h1 className='font-bold text-xl'>Lavisha jain</h1>
        <img className='w-44 rounded-full h-44 border-2 border-pink-400' src={pooja}/>
        <p className='text-center'>Dr. Lavisha, an MTech instructor . from Stanford, excels in machine learning, cloud computing, and big data analytics. She has over a decade of industry experience at Amazon and Microsoft. Her teaching style focuses on hands-on projects and student engagement. Dr. Lavisha is a published author and recipient of multiple teaching excellence awards. </p>
        <h2 className='font-bold text-md'>MTech in CS </h2>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl transition transform hover:-translate-y-1 hover:shadow-lg'>
        <h1 className='font-bold text-xl'>Sachin Pathe</h1>
        <img className='w-44 rounded-full h-44 border-2 border-pink-400' src={sachin}/>
        <p className='text-center'>Dr. Sachin Pathe, an MTech instructor . from Stanford, excels in machine learning, big data, and cloud computing. She has worked with leading tech companies like Amazon and Microsoft, bringing practical expertise to her teaching. Her courses focus on hands-on projects and industry-relevant skills. Dr. Sachin is a published author and recipient of several teaching excellence awards. </p>
        <h2 className='font-bold text-md'>MSc in Computer</h2>
      </div>
    </div>
    </>
  )
}

export default WhatOurTwo
