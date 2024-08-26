import Footer from '@/components/Footer';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Blog // João Pedro Cosso',
};

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}

export default BlogLayout