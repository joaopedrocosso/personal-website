"use client"
import { EXPERIENCES } from '@/app/(portfolio)/_constants'
import Link from 'next/link'
import React from 'react'
import Button from '../../../components/Button';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { motion } from 'framer-motion';

const safeLink = (link?: string) => link ?? "#";

const Experience = () => {
  return (
    <motion.div 
        id="experience" 
        className="pb-4"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
    >
        <div className="mt-10 lg:mt-20 mb-8 flex flex-row justify-between items-center w-full p-4">
            <h1 className="text-start tracking-widest font-semibold text-md text-white-1">
                EXPERIENCE
            </h1>

            <Button 
                href='https://www.linkedin.com/in/joaopedrocosso/'
                text='Full Resume'
                icon={<LiaExternalLinkAltSolid />}
            />
        </div>

        <div>
            {EXPERIENCES.map((experience, index) => (
                <Link key={index} href={safeLink(experience.link)} legacyBehavior>
                    <a target="_blank" >
                        <div className="mb-8 flex flex-wrap lg:justify-center p-4 hover:bg-[#302f4634] rounded transition-all cursor-pointer">
                            <div className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-white-2">{experience.year}</p>
                            </div>

                            <div className="w-full w-full lg:w-3/4 text-white-1 hover:text-sky-400 transition-all">
                                <h6 className="mb-2 font-semibold">
                                    {experience.role} - {" "} {experience.company}
                                </h6>

                                <p className="mb-4 text-white-2 text-sm leading-relaxed">
                                    {experience.description}
                                </p>

                                <div className="flex flex-wrap space-x-2">
                                    {experience.technologies.map((tech, index) => (
                                    <span key={index} className="rounded bg-[#082f49] px-2 py-1 text-sm font-semibold text-sky-400 mb-2">
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div> 
    </motion.div> 
  )
}

export default Experience