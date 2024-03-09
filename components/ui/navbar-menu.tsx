'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative border-1 '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer hover:opacity-[0.9] text-orange-400 dark:text-orange-400'
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='bg-black bg-opacity-85 dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='w-max h-full p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='bg-black/[0.96] relative rounded-full boder border-2 border-orange-400 border-opacity-50 shadow-input flex justify-center space-x-4 px-8 py-6'
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
  blurDataURL,
}: {
  title: string
  description: string
  href: string
  src: string
  blurDataURL: string
}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      <Image
        src={src}
        width={170}
        height={100}
        alt={title}
        className='flex-shrink-0 rounded-md shadow-2xl'
        placeholder='blur'
        blurDataURL={blurDataURL}
      />
      <div>
        <h4 className='text-xl font-bold mb-1 text-orange-400 dark:text-orange-400'>
          {title}
        </h4>
        <p className='text-orange-400 text-sm max-w-[10rem] dark:text-orange-400'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className='text-orange-400 dark:text-orange-400 hover:text-orange-600 '
    >
      {children}
    </Link>
  )
}
