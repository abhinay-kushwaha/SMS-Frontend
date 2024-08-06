import React from 'react';

const SuccessStory = () => {
  // Separate data for left-to-right and right-to-left animations
  const successStoriesLeftToRight = [
    {
      name: "Pooja Balapurkar",
      position: "Software Engineer",
      company: "Flipkart",
      logo: "https://assets.entrepreneur.com/content/3x2/2000/20180511063849-flipkart-logo-detail-icon.jpeg"
    },
    {
      name: "Purvi Sugandhi",
      position: "Product Manager",
      company: "Capgemini",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeOQvBZcFKMlIsnuNttmNy7fikh4B7ToXfg&s"
    },
    {
        name: "Harsh Bagul",
        position: "Data Scientist",
        company: "Oracle",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOIExes7SkKMj61zdgksPGqTv-mIEPVod6w&s"
      },
      {
        name: "Bhushan Jain",
        position: "Marketing Specialist",
        company: "TCS",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKv7SM8lD22coz_lRkbbJMFvbHwRZhrIKbA&s"
      },
      {
        name: "Naman Patel",
        position: "DevOps Engineer",
        company: "ZoHo",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kkacT1NTzkGltGoG82V_E8J5LEY92FTuGQ&s"
      },
      {
          name: "Prakriti Choudhary ",
          position: "Marketing Specialist",
          company: "Infosys",
          logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png"
        },
      {
          name: "Khushi Songirkar",
          position: "Marketing Specialist",
          company: "Accenture",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__VnQxwfY5hNt9mqjTyJz0E9N-U7pajn5ag&s"
        },
  ];

  const successStoriesRightToLeft = [
    {
        name: "Kushal Rathore",
        position: "Software Engineer",
        company: "ThoughWin",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwW1x2GrkzRDh9cOiFZiZkbIcebVInZPkK5A&s"
      },
      {
        name: "Sonty Sharma",
        position: "Frontend Engineer",
        company: "Dispark",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_6AQLlvlypZzmkcNcXfu0yRPf0TavRg49Q&s"
      },
      {
          name: "Muneera Arif",
          position: "Data Engineer ",
          company: "Google",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5H1u7a-uTw2SUue89NpzDALTCrxYtxF6oA&s"
        },
        {
          name: "Gauri Panchal ",
          position: "Marketing Specialist",
          company: "Systango",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP94OS8bm-GQupsyrboQqA3SPRXrvleQiTA&s"
        },
        {
          name: "Hardik Maheshwari ",
          position: "DevOps Engineer",
          company: "MicroSoft",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl65eKN8VP6bXTDjLmLr2Ue0nghB6Hlbi-NQ&s"
        },
        {
            name: "Nadiv Londhe",
            position: "Marketing Specialist",
            company: "CIS",
            logo: "https://yt3.googleusercontent.com/A_CqXiKzUwtis9h9RapJ-SoIl2gQQ8Cdmr512-_vdo8Y5cc38eibuTt2HGsbLlt50JCRHQhq1A=s900-c-k-c0x00ffffff-no-rj"
          },
        {
            name: "Nandini",
            position: "Marketing Specialist",
            company: "Walmart",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbs6TlXffyq_aKJhI6skUKpqo08lWHFKzXqQ&s"
          },
  ];

  return (
    <div className="container mx-auto py-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">
        <b className="text-orange-600">Success Stories</b> from 1000s of Students Like You
      </h2>

      {/* Left to Right Marquee */}
      <div className="marquee-left whitespace-nowrap py-4 mb-8">
        <div className="inline-flex space-x-8 animate-marquee-left">
          {successStoriesLeftToRight.map((story, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6 inline-block">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold">{story.name}</h3>
                <p className="text-black-900">{story.position} at {story.company}</p>
              </div>
              <img src={story.logo} alt={`${story.company} logo`} className="w-16 h-16 mx-auto"/>
            </div>
          ))}
        </div>
      </div>

      {/* Right to Left Marquee */}
      <div className="marquee-right whitespace-nowrap py-4">
        <div className="inline-flex space-x-8 animate-marquee-right">
          {successStoriesRightToLeft.map((story, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6 inline-block">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold">{story.name}</h3>
                <p className="text-black-900">{story.position} at {story.company}</p>
              </div>
              <img src={story.logo} alt={`${story.company} logo`} className="w- h-16 mx-auto"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;

