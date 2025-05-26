// src/components/MPCLinkCard.jsx
import React from 'react';

export default function MPCLinkCard({ title, imgSrc }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col items-center">
      <img
        src={imgSrc}
        alt={title}
        className="h-32 w-full object-cover rounded"
      />
      <h3 className="mt-4 text-lg font-medium text-center">{title}</h3>
    </div>
  );
}
