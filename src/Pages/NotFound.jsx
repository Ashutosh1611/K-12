import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center gap-4 max-w">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <p className="text-3xl mt-4 text-white">Oops! Page not found.</p>
          <p className="mt-2 text-gray-200">The page you are looking for does not exist.</p>
          <Link
            to="/"
            className="mt-6 px-6 py-3 bg-[#1ea7c6] text-white rounded-lg hover:bg-[#168aa0] transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      );
}

export default NotFound