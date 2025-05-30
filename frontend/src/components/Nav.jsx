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
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#data" className="hover:text-blue-600">Data</a>
          <a href="#publications" className="hover:text-blue-600">Publications</a>
          <a href="#blogs" className="hover:text-blue-600">Blogs</a>
          <a href="#podcasts" className="hover:text-blue-600">Podcasts</a>
          <button className="hover:text-blue-600">
            <Search size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav