"use client";

import Link from "next/link";
import { Home, Luggage, SquarePen, Tag, MessageCircleMore } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Sidebar() {

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
    <div className="w-24 border-r bg-gray-50">
      <div className="flex flex-col h-full max-h-screen gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 text-xs font-medium ">
            <Link href="#" passHref>
              <div className="flex flex-col items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Home className="h-5 w-5 mb-2 mt-10" />
                <span>Overview</span>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="flex flex-col items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Luggage className="h-5 w-5 mb-2 mt-4" />
                <span className="text-center">Offers &<br/>Requests</span>
              </div>
            </Link>
            <Link href="#" passHref>
            <div className="flex flex-col items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <SquarePen className="h-5 w-5 mb-2 mt-4" />
                <span>Properties</span>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="flex flex-col items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Tag className="h-5 w-5 mb-2 mt-4" />
                <span>Finances</span>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="flex flex-col items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <MessageCircleMore className="h-5 w-5 mb-2 mt-4" />
                <span>Messages</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
