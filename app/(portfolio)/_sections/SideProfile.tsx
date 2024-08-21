'use client'
import Heading from '@/app/(portfolio)/_components/Heading'
import PortfolioNav from '@/app/(portfolio)/_components/PortfolioNav'
import Social from '@/app/(portfolio)/_components/Social'
import { CONTACT } from '@/app/(portfolio)/_constants'
import { useScroll } from '../_providers/ScrollProvider'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

const SideProfile = () => {
    const { handleScroll, activeSection } = useScroll();

    return (
        <>
            <div>
                <Heading />

                <PortfolioNav activeSection={activeSection} handleScroll={handleScroll} />
            </div>

            <motion.div 
                className='flex mb-10 lg:mb-0 lg:flex-col items-start gap-4 text-white-2'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                <Social 
                    href={`mailto:${CONTACT.email}`}
                    text={CONTACT.email}
                    icon={<MdEmail />}
                />

                <Social 
                    href='https://github.com/joaopedrocosso/'
                    text='github.com/joaopedrocosso/'
                    icon={<FaGithub />}
                />

                <Social 
                    href='https://www.linkedin.com/in/joaopedrocosso/'
                    text='/in/joaopedrocosso/'
                    icon={<FaLinkedin />}
                />
            </motion.div>
        </>
    )
}

export default SideProfile