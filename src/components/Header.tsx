'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', link: "/" },
    { id: 2, text: 'Magazine', link: '/magazine' },
    { id: 3, text: 'Articoli', link: '/articoli' },
    { id: 4, text: 'About Crack!', link: '/aboutcrack' },
    { id: 5, text: 'Chi siamo', link: '/aboutus' },
  ];

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='title w-full text-3xl font-bold'>Crack!</h1>
      <button type="button" className="focus:outline-none font-medium text-sm px-4 py-2 text-center">O</button>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link
            key={item.id}
            href={item.link}
            className='p-4 m-2 cursor-pointer duration-300'
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <i>X</i> : <i>!!!</i>}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] ease-in-out duration-500 bg-white'
            : 'ease-in-out w-[60%] duration-500 fixed bottom-0 left-[-100%]'
        }
      >

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 duration-300 cursor-pointer'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;