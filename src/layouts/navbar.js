import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-3">
      <div className="container lg:pl-16 p-3">
        <div className='flex justify-between'>
            <Link to="/" className="text-white font-semibold lg:text-xl">
              Job Vacancy
            </Link>
            <div></div>
            <div className="flex justify-between">
                <Link to="/login" className='bg-white px-2 py-1 rounded-md'>Login</Link>
                <Link to="/register" className='bg-gray-700 px-2 py-1 ml-2 rounded-md text-white'>Register</Link>
            </div>
        </div>
      </div>
    </nav>
  )
}
