import React from 'react';
import laptopgirl from '../../Assets/laptopgirl.jpg';

const MainContent = () => {
  const featuresLeft = [
    "Basic to advanced-level training programs",
    "Project idea building, Implementation, and Execution",
    "Comprehensive teaching methodologies",
    "Live training classes",
    "Seminars and Workshops"
  ];

  const featuresRight = [
    "Interview & GD Preparation",
    "Soft skills enhancement",
    "Presentation & Personality Development",
    "Logic building techniques",
    "Industry-ready IT expert"
  ];

  const FeatureList = ({ features, animation }) => (
    <ul className={`space-y-4 ${animation}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-full">
            <span className="text-lg">★</span>
          </div>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Company Name Today!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/3 space-y-4">
          <FeatureList features={featuresLeft} animation="animate-slideInLeft" />
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src={laptopgirl} alt="Feature" className="w-96 h-66 rounded-xs" />
        </div>
        <div className="md:w-1/3 space-y-4">
          <FeatureList features={featuresRight} animation="animate-slideInRight" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
