// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'px-4 py-2 text-blue-600 border-b-2 border-blue-600'
      : 'px-4 py-2 hover:text-blue-500';

  return (
    <nav className="bg-white shadow">
      <ul className="container mx-auto flex space-x-8">
        <li>
          <NavLink to="/team" className={linkClasses}>
            Team Members
          </NavLink>
        </li>
        <li>
          <NavLink to="/mpc" className={linkClasses}>
            MPC
          </NavLink>
        </li>
        <li>
          <NavLink to="/explorer" className={linkClasses}>
            Explorer
          </NavLink>
        </li>
        <li>
          <NavLink to="/ourworks" className={linkClasses}>
            OurWorks
          </NavLink>
        </li>
        <li>
          <NavLink to="/outreach" className={linkClasses}>
            Outreach
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
