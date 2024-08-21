"use client"
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
        id="about" 
        className='pb-4'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
    >
        <div className='flex flex-wrap justify-center p-4 pt-16 lg:pt-24'>
            <div className='w-full'>
                <div className='flex flex-col justify-center lg:justify-start text-black'>

                    <h1 className="lg:hidden mb-8 text-start tracking-widest font-semibold text-md text-white-1">
                        ABOUT
                    </h1>

                    <p className='my-2 w-full lg:max-w-xl leading-relaxed text-white-2'>
                        My journey in development began with a curiosity about how things work, evolving into a career that forces me to learn and adapt continuously. During this time, I&apos;ve worked on projects ranging from embedded systems for rockets to <strong className='text-blue-1 font-medium'>full-stack applications</strong> ready to be launched.
                    </p>
                    <p className='my-2 w-full lg:max-w-xl leading-relaxed text-white-2'>
                        Currently, my focus is on building web applications with a design and business logic that meet any type of demand, reflecting a careful <strong className='text-blue-1 font-medium'>analysis of requirements</strong> so that everything is done the way it should be. In my spare time, I also create <strong className='text-blue-1 font-medium'>programming content</strong> and interact on forums to help other developers.
                    </p>
                    <p className='my-2 w-full lg:max-w-xl leading-relaxed text-white-2'>
                        When I&apos;m not coding, I&apos;m usually playing tennis, going to the gym, hanging out with my girlfriend or with my family and a dog who knows how to smile to order snacks.
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About