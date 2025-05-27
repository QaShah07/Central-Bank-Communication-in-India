// src/components/TeamCard.jsx

import React from 'react';

export default function TeamCard({ name, role, photo }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={photo}
        alt={name}
        className="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow-md"
      />
      <h3 className="mt-4 text-lg font-medium">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
