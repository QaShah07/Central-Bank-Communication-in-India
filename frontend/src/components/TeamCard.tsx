import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
  affiliation?: string;
  linkedinUrl?: string;
}

export default function TeamCard({ name, role, photo, affiliation, linkedinUrl }: TeamCardProps) {
  const handleProfileClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div 
        onClick={handleProfileClick}
        className={`relative w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-white cursor-pointer group`}
      >
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {linkedinUrl && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Linkedin className="w-8 h-8 text-white" />
          </div>
        )}
      </div>
      <h3 
        onClick={handleProfileClick}
        className={`text-xl font-bold text-gray-900 mb-2 ${linkedinUrl ? 'cursor-pointer hover:text-blue-600' : ''}`}
      >
        {name}
      </h3>
      <p className="text-md font-medium text-blue-600 mb-2">{role}</p>
      {affiliation && (
        <p className="text-sm text-gray-600 max-w-[250px] leading-snug">
          {affiliation}
        </p>
      )}
    </div>
  );
}