"use client"
import React from 'react'
import { TECHSTACK } from '@/app/(portfolio)/_constants'
import { motion } from 'framer-motion'

const Knowledge = () => {
  return (
    <motion.div 
        id="tech-stack" 
        className="mb-10"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
    >
        <h1 className="mt-10 lg:mt-20 mb-8 w-full p-4 text-start tracking-widest font-semibold text-md text-white-1">
            TECH STACK
        </h1> 

        <div>
            {TECHSTACK.map((techstack, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-start p-4 hover:bg-[#302f4634] rounded transition-all cursor-pointer">
                  <div className="w-full max-w-xl lg:w-4/4 text-white-1 hover:text-sky-400 transition-all">
                      <h6 className="mb-2 font-semibold">
                          {techstack.title}
                      </h6>

                      <p className="mb-4 text-sm text-white-2 leading-relaxed">
                          {techstack.description}
                      </p>

                      <div className="flex flex-wrap space-x-2">
                        {techstack.technologies.map((tech, index) => (
                            <span key={index} className="rounded bg-[#082f49] px-2 py-1 text-sm font-semibold text-sky-400">
                                {tech}
                            </span>
                        ))}
                      </div>
                  </div>
              </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Knowledge