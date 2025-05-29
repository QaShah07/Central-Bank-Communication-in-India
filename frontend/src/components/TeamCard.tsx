import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
  area_of_work?: string;
  affiliation?: string;
  profileUrl?: string;
}

export default function TeamCard({ name, role, photo, area_of_work, affiliation, profileUrl }: TeamCardProps) {
  const handleProfileClick = () => {
    if (profileUrl) {
      window.open(profileUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex flex-col items-center text-center group">
      <div 
        onClick={handleProfileClick}
        className={`relative w-48 h-48 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-white transition-all duration-300 ${profileUrl ? 'hover:border-blue-500 hover:shadow-xl cursor-pointer' : ''}`}
      >
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
        />
        {profileUrl && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-8 h-8 text-white cursor-pointer" />
          </div>
        )}
      </div>
      <h3 
        onClick={handleProfileClick}
        className={`text-xl font-bold text-gray-900 mb-2 ${profileUrl ? 'hover:text-blue-600 cursor-pointer' : ''}`}
      >
        {name}
      </h3>
      <p className="text-md font-medium text-blue-600 mb-2">{role}</p>
      {area_of_work && (
        <p className="text-sm text-gray-600 max-w-[280px] leading-relaxed mb-2">
          {area_of_work}
        </p>
      )}
      {affiliation && (
        <p className="text-sm text-gray-500 italic">
          {affiliation}
        </p>
      )}
    </div>
  );
}
