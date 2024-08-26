import Footer from '@/components/Footer';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Home // João Pedro Cosso',
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}

export default HomeLayout