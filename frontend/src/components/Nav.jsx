import React from 'react';
import { Search } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Central Bank Communication in India</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#teammembers" className="hover:text-blue-600">Team Members</a>
          <a href="#mpc" className="hover:text-blue-600">MPC</a>
          <a href="#explorer" className="hover:text-blue-600">Explorer</a>
          <a href="#outworks" className="hover:text-blue-600">Outworks</a>
          <a href="#outreach" className="hover:text-blue-600">Outreach</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          {/* <button className="hover:text-blue-600">
            <Search size={20} />
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav