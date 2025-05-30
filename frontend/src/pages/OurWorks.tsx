import React from 'react';
import WorkHeader from '../components/WorkHeader';
import WorkBody from '../components/WorkBody';

const OurWorks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <WorkHeader />
      <WorkBody />
    </div>
  );
};

export default OurWorks;