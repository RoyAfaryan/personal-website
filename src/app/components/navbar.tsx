'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation'; // Import usePathname to check the current route
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Update the indicator position based on the active tab
  useEffect(() => {
    let activeElement;
    if (pathname === '/') activeElement = homeRef.current;
    else if (pathname === '/About') activeElement = aboutRef.current;
    else if (pathname === '/Contact') activeElement = contactRef.current;

    if (activeElement) {
      const { offsetLeft, offsetWidth, offsetHeight } = activeElement;
      setIndicatorStyle({
        transform: `translateX(${offsetLeft}px)`,
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
        opacity: 1, // Fade in the indicator
      });
    }
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray p-6">
      <div className="flex items-center flex-shrink-0 mx-auto gap-24 font-standard text-2xl font-bold text-gray-400 relative">
        {/* Active Indicator */}
        <span
          className="absolute bottom-0 h-10 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        ></span>

        {/* Home Link */}
        <div ref={homeRef} className="relative">
          <Link
            href="/"
            className={`relative px-6 py-3 rounded-lg transition-colors ${
              pathname === '/' ? 'text-white' : 'hover:text-white'
            }`}
          >
            Home
          </Link>
        </div>

        {/* About Link */}
        <div ref={aboutRef} className="relative">
          <Link
            href="/About"
            className={`relative px-6 py-3 rounded-lg transition-colors ${
              pathname === '/About' ? 'text-white' : 'hover:text-white'
            }`}
          >
            About
          </Link>
        </div>
       
      </div>
    </nav>
  );
}