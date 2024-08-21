import Link from 'next/link'
import React, { ReactNode } from 'react'

interface SocialProps {
    href: string,
    text?: ReactNode,
    icon: ReactNode;

}

const Social = ({ href, text, icon }: SocialProps) => {
  return (
    <Link href={href} legacyBehavior>
        <a target="_blank" className="mt-10 lg:mt-0 text-2xl lg:text-xl flex flex-row items-center gap-2 hover:text-white-1 transition-all">
            {icon}
            <span className="text-sm hidden lg:block">
                {text}
            </span>
        </a>
    </Link>
  )
}

export default Social