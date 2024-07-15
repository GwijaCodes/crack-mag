'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 2, text: 'Magazine', link: './magazine' },
    { id: 3, text: 'Articoli', link: './articoli' },
    { id: 4, text: 'About Crack!', link: './aboutcrack' },
    { id: 5, text: 'Chi siamo', link: './aboutus' },
  ];

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-[20%] gap-2'>
      <a href='/' className='title w-full text-3xl font-bold'>Crack!</a>
      <button type="button" className="button rounded font-medium text-sm px-4 py-2 text-center">O</button>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link
            key={item.id}
            className='p-4 m-2 cursor-pointer duration-300'
            href={item.link}
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <i className='button mx-[10px]'>X</i> : <i className='button mx-[10px]'>=</i>}
      </div>

      {/* Mobile Navigation Menu */}
      
      <ul
        className={
          nav
            ? 'fixed bg-[#FF98F8] h-[50v] border-black border-2 md:hidden left-0 bottom-0 w-screen py-4 px-[20%] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed w-screen bottom-[-200%] left-0'
        }
      >
        <h2 className='title text-2xl'>Menu</h2>
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link
          href={item.link}
          >
          <li
            key={item.id}
            
            className='button p-4 duration-300 cursor-pointer title text-sm'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;