import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Blog // João Pedro Cosso',
};

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        {children}
        <div className="flex flex-row justify-center items-center">
          <Logo width={300} height={173.95} />
        </div>
        <Footer />
    </div>
  )
}

export default BlogLayout