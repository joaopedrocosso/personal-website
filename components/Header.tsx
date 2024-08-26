'use client'
import React, { useState } from 'react'
import SelectLanguage from './SelectLanguage'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='z-10 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm bg-gray-900/50 py-4 sticky top-0 border-b border-white/15 md:border-none'>
      <div className='container'>
        <div className='flex md:bg-gray-900/50 md:backdrop-blur-sm justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-4xl mx-auto'>
            <Link href='/'>
                <Logo width={60} height={34.79} />
            </Link>

          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a
                href="/"
                className='text-white/70 hover:text-sky-400 hover:border-b hover:border-sky-400 hover:font-semibold transition-all duration-300'>
                Home
              </a>
              <a
                href="/portfolio"
                className='text-white/70 hover:text-sky-400 hover:border-b hover:border-sky-400 hover:font-semibold transition-all duration-300'>
                Portfolio
              </a>
              <a
                href="/blog"
                className='text-white/70 hover:text-sky-400 hover:border-b hover:border-sky-400 hover:font-semibold transition-all duration-300'>
                Blog
              </a>
            </nav>
          </div>

          <div className='flex gap-4 items-center'>
            <SelectLanguage />
            <div
              className='md:hidden border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 cursor-pointer transition-all duration-300'
              onClick={toggleMenu} 
            >
              {menuOpen ? (
                <IoClose className='h-[1.4rem] w-[1.4rem] transition-all duration-300' />
              ) : (
                <RxHamburgerMenu className='h-[1.4rem] w-[1.4rem] transition-all duration-300' />
              )}
            </div>
          </div>
        </div>

        <nav
          className={`text-sm md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
            <div className='flex flex-col items-center gap-6 mt-8 mb-2'>
                <a
                    href="/"
                    className='text-white/70 text-base hover:text-sky-400 hover:font-semibold transition-all duration-300'>
                    Home
                </a>
                <a
                    href="/portfolio"
                    className='text-white/70 text-base hover:text-sky-400 hover:font-semibold transition-all duration-300'>
                    Portfolio
                </a>
                <a
                    href="/blog"
                    className='text-white/70 text-base hover:text-sky-400 hover:font-semibold transition-all duration-300'>
                    Blog
                </a>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
