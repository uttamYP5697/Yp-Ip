'use client'; // Add this to make the component a Client Component

import React from 'react';
import "../app/globals.css"

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <div className="section-404 w-full h-screen flex flex-col justify-center items-center "><h3 className="text-6xl mb-10 font-plakatgrotesk font-blod font">404 page</h3><div className="back-to-home-btn">
          {/* <a href="/" title="Back To Home" className="uppercase inline-block menu-link-hover text-center px-4 py-4 w-auto md:w-[170px] font-bold  border border-goldx bg-transparent transition-all duration-500 text-white rounded-xl">back to home</a> */}
        </div>
        </div>
      </div>

    </div>
  );
}

export default NotFound;
