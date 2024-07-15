import React from 'react'
import { navs } from '@/data/data'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav id="idnavbar" className='navbar'>
        <ul className='flex gap-5'>
            {
                navs.map(nav => (
                    <li key={nav.id}>
                        <Link href={nav.link}>{
                        nav.name
                        }</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}
