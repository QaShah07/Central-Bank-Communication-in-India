import React from 'react';

const MPCMembers: React.FC = () => {
  const members = [
    {
      name: "Dr. Anika Sharma",
      title: "Deputy Governor, Reserve Bank of India",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Dr. Sharma holds a PhD in Economics from the University of Mumbai and has over 20 years of experience in monetary policy and financial regulation. Her expertise lies in macroeconomic modeling and forecasting."
    },
    
    {
      name: "Mr. Rohan Verma",
      title: "Government Nominee",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Mr. Verma is an economist with a Master's degree from the Delhi School of Economics. He has worked extensively on fiscal policy and public finance, bringing a wealth of knowledge on government finances to the committee."
    },
    {
      name: "Ms. Priya Kapoor",
      title: "External Member",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Ms. Kapoor is a renowned academic with a PhD from the Indian Institute of Management, Bangalore. Her research focuses on financial markets and institutions, and she has published widely in leading economics journals."
    },
    {
      name: "Mr. Arjun Singh",
      title: "Executive Director, Reserve Bank of India",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Mr. Singh has a Master's in Economics from the London School of Economics and has been with the Reserve Bank for 15 years. His areas of expertise include banking supervision and regulatory policy."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">MPC Members</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Member Profiles</h2>
        
        <div className="space-y-12">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{member.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
              </div>
              <div className="w-full lg:w-80 h-64 overflow-hidden rounded-lg bg-gray-200 flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MPCMembers;