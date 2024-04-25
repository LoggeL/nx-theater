'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '../components/ui/navbar-menu'

import plays from '@/components/data/plays.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [active, setActive] = useState<string | null>(null)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        setIsScrollingUp(false)
      } else {
        setIsScrollingUp(true)
      }
      setLastScrollTop(st <= 0 ? 0 : st)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  return (
    <html lang='en' className='h-full w-full'>
      <body
        className={`${inter.className} w-full h-full bg-black/[0.95] antialiased`}
      >
        <div className='flex flex-col md:items-center md:justify-center h-full'>
          <div
            className='fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-opacity duration-500'
            style={{ opacity: isScrollingUp ? 1 : 0 }}
          >
            <Menu setActive={setActive}>
              <MenuItem
                setActive={setActive}
                active={active}
                item='Home'
                href='/'
              >
                <div className='flex flex-col space-y-4 text-sm'>
                  <HoveredLink href='/'>Home</HoveredLink>
                  <HoveredLink href='/news'>Aktuell</HoveredLink>
                  <HoveredLink href='/projects'>Projekte</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem
                setActive={setActive}
                active={active}
                item='Team'
                href='/team/actors'
              >
                <div className='flex flex-col space-y-4 text-sm'>
                  <HoveredLink href='/about'>Über uns</HoveredLink>
                  <HoveredLink href='/team/actors'>Schauspieler</HoveredLink>
                  <HoveredLink href='/team/tech'>Technik</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='Rückblick'>
                <div className='text-sm grid grid-cols-2 gap-10 p-4'>
                  {plays.map((play) => (
                    <ProductItem
                      key={play.title}
                      title={play.title}
                      description={play.description}
                      href={play.link}
                      src={play.img}
                      blurDataURL={blurHashToDataURL(play.blurHash) || ''}
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
