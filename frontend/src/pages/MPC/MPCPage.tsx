import React from 'react';
import { useNavigate } from 'react-router-dom';
// import MPCMembers from "./Pages"

interface MPCCard {
  title: string;
  image: string;
  path: string;
}

const MPCPage: React.FC = () => {
  const navigate = useNavigate();

  const cards: MPCCard[] = [
    {
      title: "Formation and Evolution",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path: "/formation"
    },
    {
      title: "MPC Decisions",
      image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path: "/mpc-decisions"
    },
    {
      title: "MPC Members",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path: "/member"
    },
    {
      title: "MPC Members Voting Pattern",
      image: "https://images.pexels.com/photos/7567476/pexels-photo-7567476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path: "/landing"
    },
    {
      title: "MPC Discussions and Macroeconomic Variables",
      image: "https://images.pexels.com/photos/7567455/pexels-photo-7567455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path: "/landing"
    },
    {
      title: "Word Cloud",
      image: "https://images.pexels.com/photos/7567469/pexels-photo-7567469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path: "*"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Explore Monetary Policy Committee (MPC)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => navigate(card.path)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MPCPage;