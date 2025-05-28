import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
  affiliation?: string;
}

export default function TeamCard({ name, role, photo, affiliation }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-white">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-md font-medium text-blue-600 mb-2">{role}</p>
      {affiliation && (
        <p className="text-sm text-gray-600 max-w-[250px] leading-snug">
          {affiliation}
        </p>
      )}
    </div>
  );
}