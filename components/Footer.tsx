import React from 'react'
import ArrowUpRight from '@/app/(home)/_components/ArrowUpRight'

const footerLinks = [
    {
        title: 'GitHub',
        href: 'https://github.com/joaopedrocosso',
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/joaopedrocosso/',
    },
    {
        title: 'Portfolio',
        href: 'https://joaopedrocosso.com/portfolio',
    },
    {
        title: 'Blog',
        href: 'https://joaopedrocosso.com/blog',
    }
]

const Footer = () => {
  return (
    <footer className='mt-20 relative z-10 overflow-x-clip'>

        <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#082f49] [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>

        <div className='border-t border-white/15' />

        <div className='container'>
            <div className='max-w-5xl mx-auto py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
                <div className='text-[#ffffff90]'>2024 &copy; João Pedro Cosso. All rights reserved</div>
                <nav className='flex flex-col md:flex-row items-center gap-8'>
                    {footerLinks.map((link) => (
                        <a 
                            href={link.href} 
                            key={link.title}
                            className='hover:text-sky-400 transition-all inline-flex items-center gap-1.5'
                            target='_blank'
                        >
                            <span className='font-semibold'>{link.title}</span>
                            <ArrowUpRight />
                        </a>
                    ))}
                </nav>
            </div>
      </div>
    </footer>
  )
}

export default Footer
