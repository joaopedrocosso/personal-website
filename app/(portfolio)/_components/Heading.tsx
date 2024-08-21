"use client"

import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import CursorBlinker from '../../../components/CursorBlinker';

const Heading = () => {

    const baseText = "Transforming the future of web development. " as string;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.slice(0, latest)
    );
  
    useEffect(() => {
      const controls = animate(count, baseText.length, {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      });
      return controls.stop;
    }, []);

    return (
        <section>
            <motion.h1
                className='text-4xl lg:text-5xl text-white-1 py-2 font-bold tracking-tight'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.1}}
            >
                João Pedro Cosso
            </motion.h1>

            <div className='flex flex-col gap-2'>
                <motion.span
                    className="text-xl lg:text-2xl bg-gradient-to-r from-[#3735ca] to-[#4d4af9] bg-clip-text tracking-tight text-transparent font-semibold"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    Full Stack Developer
                </motion.span>

                <span className="max-w-xs lg:max-w-80">
                    <motion.span
                        className='text-base lg:text-base mt-4 text-white-2'
                    >
                        {displayText}
                    </motion.span>
                    <CursorBlinker />
                </span>
            </div>
        </section>
    )
}

export default Heading