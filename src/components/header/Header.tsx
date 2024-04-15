import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <h1 className="text-3xl font-bold cursor-pointer">
        <Link to="/">LearnZone</Link>
      </h1>

      <nav>
        <ul className="flex items-center space-x-6">
          <li className='text-md font-medium '>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Courses</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Sign In
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Header