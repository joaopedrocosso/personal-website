import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio // João Pedro Cosso',
};

const PortfolioLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default PortfolioLayout