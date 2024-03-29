'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import Link from 'next/link'

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  link,
}: {
  imageUrl: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  className?: string
  link: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={cn(
        'w-60 h-120 bg-transparent rounded-lg overflow-hidden group/card relative',
        className
      )}
    >
      <Link href={link}>
        <motion.div
          className='h-full w-full relative bg-gray-50'
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1 / 1.1 }}
        >
          <Image
            alt='image'
            className={cn(
              'h-full w-full object-cover scale-110',
              imageClassName
            )}
            placeholder='blur'
            blurDataURL={blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')}
            width='1000'
            height='2000'
            src={imageUrl}
          />
        </motion.div>
        <div
          className={cn(
            'text-white absolute bottom-4 left-4 z-40 text-lg font-bold',
            childrenClassName
          )}
        >
          {children}
        </div>
      </Link>
    </div>
  )
}
