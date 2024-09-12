import React from 'react'
import Image from 'next/image'
import ProfileImage from "../_assets/profile.jpg"
import { FaArrowDown } from 'react-icons/fa'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='pb-24 pt-32 md:pb-24 md:pt-32 lg:pb-24 lg:pt-32 overflow-x-clip'>

        <div className='container'>
            <div className='flex flex-col items-center'>
                <Image src={ProfileImage} alt='Joao Pedro Cosso Picture' className='size-[100px] rounded-t-xl'/>

                <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                    <div className='bg-green-500 size-2.5 rounded-full'>

                    </div>
                    <div className='text-sm font-medium'>
                        Available for new projects
                    </div>
                </div>
            </div>
            
            <div className='max-w-xl mx-auto'>
                <h1 className='font-semibold text-3xl md:text-5xl text-center  mt-4 tracking-wide'>Building Exceptional Digital Products</h1>

                <p className='mt-4 text-center text-[#ffffff70] md:text-lg font-light'>I can create modern experiences on the front-end and agile applications on the back-end, generating a complete and optimized product from end to end.</p>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                <Link href='/blog'>
                    <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                        <span>📝</span>
                        <span className='font-normal'>Read my blog</span>
                        {/* <FaArrowDown className='size-4'/> */}
                    </button>
                </Link>
                <Link href='/portfolio'>
                    <button className='inline-flex items-center gap-2 border border-white bg-[#fff] text-gray-900 h-12 px-6 rounded-xl'>
                        <span>👨‍💻</span>
                        <span className='font-semibold'>Professional portfolio</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
