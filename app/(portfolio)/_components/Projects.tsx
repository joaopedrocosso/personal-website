"use client"
import { PROJECTS } from '@/app/(portfolio)/_constants';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import Button from '../../../components/Button';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { motion } from 'framer-motion';

const safeLink = (link?: string) => link ?? "#";

const Projects = () => {
  return (
    <motion.div 
        id="projects" 
        className="pb-4"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
    >
        <div className="mt-10 lg:mt-20 mb-8 flex flex-row justify-between items-center w-full p-4">
            <h1 className="text-start tracking-widest font-semibold text-md text-white-1">
                PROJECTS
            </h1>

            <Button 
                href='https://github.com/joaopedrocosso'
                text='All Projects'
                icon={<LiaExternalLinkAltSolid />}
            />
        </div>
        <div>
            {PROJECTS.map((project, index) => (
                <Link key={index} href={safeLink(project.link)} legacyBehavior>
                    <a target="_blank">
                        <div className="mb-8 flex flex-wrap lg:justify-center p-4 hover:bg-[#302f4634] rounded transition-all cursor-pointer">
                            <div className="w-full lg:w-1/4">
                                <Image src={project.image} width={115} height={115} className="mb-6 rounded border border-[#3A3A3A]" alt={project.title} />
                            </div>

                            <div className="w-full lg:w-3/4 text-white-1 hover:text-sky-400 transition-all">
                                <h6 className="mb-2 font-semibold">
                                    {project.title}
                                </h6>

                                <p className="mb-4 text-sm text-white-2 leading-relaxed">
                                    {project.description}
                                </p>

                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 rounded bg-[#082f49] px-2 py-1 text-sm font-semibold text-sky-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    </motion.div>
  )
}

export default Projects