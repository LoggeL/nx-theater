'use client'

import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { Spotlight } from '../components/ui/spotlight'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '../components/ui/navbar-menu'

export default function Home() {
  const [active, setActive] = useState<string | null>(null)
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

  return (
    <div className='h-full w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
      {/* Navbar */}
      <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50')}>
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

      {/* Spotlight */}
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-56'>
        <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 pb-2'>
          <div className='text-4xl md:text-6xl'>Kolpingtheater Ramsen</div>
        </h1>
      </div>
      <div className=''>
        <CardContainer className='inter-var w-full'>
          <CardBody className='group/card aspect-square'>
            <CardItem translateZ='100' className='w-full mt-4 aspect-square'>
              <Image
                src='/logo_alt.svg'
                height='1000'
                width='1000'
                className='h-36 w-full object-contain rounded-xl'
                alt='Kolping Logo'
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}
