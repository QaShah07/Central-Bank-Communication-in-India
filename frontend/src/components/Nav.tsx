import React from 'react';
// import { Search } from 'lucide-react'; // Uncomment if/when you fix Lucide-React types
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Central Bank Communication in India</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/TeamMembers" className="hover:text-blue-600">Team Members</Link>
          <a href="#mpc" className="hover:text-blue-600">MPC</a>
          <a href="#explorer" className="hover:text-blue-600">Explorer</a>
          <Link to="/ourworks" className="hover:text-blue-600">Ourworks</Link>
          <a href="#outreach" className="hover:text-blue-600">Outreach</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          {/* 
          <button className="hover:text-blue-600">
            <Search size={20} />
          </button> 
          */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
