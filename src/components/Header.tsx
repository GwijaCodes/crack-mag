'use client'

import React, {useState} from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <header id="header" className='header flex items-center fixed top-0 p-4 bg-gray-300 w-screen'>
        <div className="container x-4 flex items-center justify-between h-auto">
            <a href="/" className='logo flex items-center'>
                <h2 className='font-bold text-xl'>Crack!</h2>
            </a>
            <Nav/>
        </div>
    </header>
  )
}
