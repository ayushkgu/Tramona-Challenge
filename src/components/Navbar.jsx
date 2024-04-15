"use client";

import Image from 'next/image';
import tramonaLogo from '../../public/tramona_logo.png'; 
import questionMarkIcon from '../../public/question_mark.png';
import profileIcon from '../../public/pfp.png'; 
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? null : (
        <nav className="bg-white border">
          <div className="max-w-lg px-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x- items-center">
                <div>
                  {/* Tramona Logo and name */}
                  <a href="#" className="flex items-center px-2">
                    <Image src={tramonaLogo} alt="Tramona Logo" width={60} height={60} className="mr-2"/>
                    <span className="font-semibold text-black text-2xl">Tramona</span>
                  </a>
                </div>
              </div>
            
            </div>
            <div className="flex items-center space-x-3 absolute top-0 right-0">
               {/* Question & Profile icons */}
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold flex items-center">
                <Image src={questionMarkIcon} alt="Help" width={28} height={28}/>
              </a>
              <a href="#" className="py-4 px-2">
                <Image src={profileIcon} alt="Profile" width={30} height={30} className="rounded-full mr-4"/>
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;