'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '../components/ui/navbar-menu'

const inter = Inter({ subsets: ['latin'] })

const recaps = [
  {
    title: 'Bluttribut',
    img: '/img/banners/bluttribut.jpg',
    description: 'Ein spannendes Drama über Vampire und ihre Opfer.',
    link: '/recap/bluttribut',
  },
  {
    title: 'Dystopia',
    img: '/img/banners/dystopia.jpg',
    description: 'Eine düstere Zukunftsvision in einer dystopischen Welt.',
    link: '/recap/dystopia',
  },
  {
    title: 'Goldfieber',
    img: '/img/banners/goldfieber.jpg',
    description: 'Eine abenteuerliche Suche nach Gold im Wilden Westen.',
    link: '/recap/goldfieber',
  },
  {
    title: 'Kloster',
    img: '/img/banners/kloster.jpg',
    description:
      'Ein geheimnisvolles Drama, das in einem abgelegenen Kloster spielt.',
    link: '/recap/kloster',
  },
  {
    title: 'Kristall',
    img: '/img/banners/kristall.jpg',
    description:
      'Eine magische Geschichte über die Macht eines mystischen Kristalls.',
    link: '/recap/kristall',
  },
  {
    title: 'Maleficarum',
    img: '/img/banners/maleficarum.jpg',
    description: 'Ein düsteres Stück über Hexerei und dunkle Magie.',
    link: '/recap/maleficarum',
  },
  {
    title: 'Proben',
    img: '/img/banners/proben.jpg',
    description:
      'Ein Einblick in die harte Arbeit und das Engagement hinter den Kulissen.',
    link: '/recap/proben',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <html lang='en' className='h-full w-full'>
      <body
        className={`${inter.className} w-full h-full bg-black/[0.96] bg-grid-white/[0.02] antialiased`}
      >
        <div className='flex flex-col md:items-center md:justify-center h-full'>
          <div className='fixed top-10 inset-x-0 max-w-2xl mx-auto z-50'>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item='Home'>
                <div className='flex flex-col space-y-4 text-sm'>
                  <HoveredLink href='/'>Home</HoveredLink>
                  <HoveredLink href='/news'>Aktuel</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='Team'>
                <div className='flex flex-col space-y-4 text-sm'>
                  <HoveredLink href='/about'>Über uns</HoveredLink>
                  <HoveredLink href='/team'>Unser Team</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='Rückblick'>
                <div className='text-sm grid grid-cols-2 gap-10 p-4'>
                  {recaps.map((recap) => (
                    <ProductItem
                      key={recap.title}
                      title={recap.title}
                      description={recap.description}
                      href={recap.link}
                      src={recap.img}
                    />
                  ))}
                </div>
              </MenuItem>
            </Menu>
          </div>

          {children}
        </div>
      </body>
    </html>
  )
}
