import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        quote: "Under the leadership of Rishabh Jain, Shanti Infosoft LLP has achieved remarkable growth and success. His vision drives the company forward.",
        author: "Rishabh Jain",
        authorTitle: "CEO",
        imgSrc: "https://via.placeholder.com/64",
        color: "bg-purple-600"
    },


    {
        quote: "Sagar Jain's strategic insights and collaborative approach make him an invaluable co-partner at Shanti Infosoft LLP.",
        author: "Sagar Jain",
        authorTitle: "Co-Partner",
        imgSrc: "https://via.placeholder.com/64",
        color: "bg-indigo-400"
      },
  {
    quote: "We are thrilled with the results Shanti Infosoft LLP delivered. Their expertise in software development is unmatched, and they exceeded our expectations in every way.",
    author: "Priya Sharma",
    authorTitle: "Founder, Tech Ventures",
    imgSrc: "https://via.placeholder.com/64",
    color: "bg-orange-400"
  },
  {
    quote: "Working with Shanti Infosoft LLP has been a game-changer for our business. Their innovative solutions have helped us stay ahead in the competitive market.",
    author: "Rahul Verma",
    authorTitle: "CTO, Digital Solutions",
    imgSrc: "https://via.placeholder.com/64",
    color: "bg-purple-400"
  },
  {
    quote: "As the Training Head at Shanti Infosoft LLP, I have witnessed their commitment to nurturing talent and delivering exceptional training programs.",
    author: "Vipin Jain",
    authorTitle: "Training Head",
    imgSrc: "https://via.placeholder.com/64",
    color: "bg-orange-400"
  },
  {
    quote: "Shanti Infosoft LLP's commitment to excellence is evident in their work. They delivered our project on time and within budget, with exceptional results.",
    author: "Ananya Singh",
    authorTitle: "CEO, Innovative Tech",
    imgSrc: "https://via.placeholder.com/64",
    color: "bg-purple-400"
  },
  {
    quote: "I highly recommend Shanti Infosoft LLP for their professionalism and dedication. They are reliable partners for any tech initiative.",
    author: "Vikram Mehta",
    authorTitle: "Founder, FutureTech",
    imgSrc: "https://via.placeholder.com/64",
    color: "bg-indigo-400"
  },
  {
    quote: "Shanti Infosoft LLP stands out for their proactive approach and technical expertise. They are responsive and deliver results that exceed expectations.",
    author: "Neha Kapoor",
    authorTitle: "CTO, Innovate Labs",
    imgSrc: "https://via.placeholder.com/64",
    color: "bg-orange-400"
  }
];

const Testimonial = ({ quote, author, authorTitle, imgSrc, color, isActive }) => {
  return (
    <div className={`relative max-w-xs mx-4 my-8 text-center flex-shrink-0 ${isActive ? 'opacity-100 transform scale-105' : 'opacity-50'}`}>
      <div className={`relative ${isActive ? color : 'bg-gray-300'} text-white p-8 rounded-lg shadow-lg transition-transform duration-500`}>
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 w-10 h-10 ${isActive ? color : 'bg-gray-300'} flex items-center justify-center text-3xl rounded-full`}>
          “
        </div>
        <p className="text-lg mb-4">“{quote}”</p>
        <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 ${isActive ? color : 'bg-gray-300'} rotate-45`}></div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <img src={imgSrc} alt={author} className="w-16 h-16 rounded-full mb-2" />
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{authorTitle}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index) => {
    setIndex(index);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl font-bold mb-8">Our Testimonials</h1>
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <button onClick={prevTestimonial} className="absolute left-0 p-2 text-white bg-blue-600 rounded-full">
          &#10094;
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / testimonials.length)}%)` }}
        >
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              quote={testimonial.quote}
              author={testimonial.author}
              authorTitle={testimonial.authorTitle}
              imgSrc={testimonial.imgSrc}
              color={testimonial.color}
              isActive={i === index}
            />
          ))}
        </div>
        <button onClick={nextTestimonial} className="absolute right-0 p-2 text-white bg-blue-600 rounded-full">
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToTestimonial(i)}
            className={`mx-2 w-4 h-4 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
