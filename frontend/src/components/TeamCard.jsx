import React from 'react';

export default function TeamCard({ name, role, photo }) {
  console.log('Rendering TeamCard for:', name); // ✅ This will log when card is used

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-blue-600">{role}</p>
    </div>
  );
}
