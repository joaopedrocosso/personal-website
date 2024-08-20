import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const NavBar = () => {
  return (
    <nav className='w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5'>
        <Link href="/" className='font-bold text-3xl'>
            Cosso
        </Link>

        <ModeToggle />
    </nav>
  )
}

export default NavBar