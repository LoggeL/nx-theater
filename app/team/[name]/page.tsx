import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

interface TeamMemberProps {
  params: {
    name: string
  }
}

export default function TeamMemberPage({ params }: TeamMemberProps) {
  const name = params.name
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
        {/* Spotlight */}
        <Spotlight
          className='-top-40 left-0 md:left-60 md:-top-20 h-full'
          fill='white'
        />
        <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0'>
          <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 pb-2 mt-56 mb-10'>
            <div className='text-4xl md:text-6xl'>{name}</div>
          </h1>
          <Image
            src={'/img/team/avatar/' + name + '.jpg'}
            height='715'
            width='1080'
            className='object-contain rounded-xl mx-auto'
            alt={name}
            priority={true}
            loading='eager'
            placeholder='blur'
            blurDataURL={blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')}
          />
        </div>
      </div>
      <div className='h-full w-full flex md:items-center md:justify-center bg-black/[0.96] relative mt-10'>
        <BentoGrid className='max-w-4xl mx-auto '>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

const recaps = [
  {
    title: 'Bluttribut',
    year: 2021,
    img: '/img/banners/bluttribut.jpg',
    description: 'Ein spannendes Drama über Vampire und ihre Opfer.',
    link: '/recap/bluttribut',
    blurHash: 'L59$kG#S~CIo].$jRjs:00Xm9Zxu',
  },
  {
    title: 'Dystopia',
    year: 2020,
    img: '/img/banners/dystopia.jpg',
    description: 'Eine düstere Zukunftsvision in einer dystopischen Welt.',
    link: '/recap/dystopia',
    blurHash: 'LGI3pi?E^Nf7HToL%J$$.PNbAGEh',
  },
  {
    title: 'Goldfieber',
    year: 2016,
    img: '/img/banners/goldfieber.jpg',
    description: 'Eine abenteuerliche Suche nach Gold im Wilden Westen.',
    link: '/recap/goldfieber',
    blurHash: 'L4EC2X0100Ir~4jZ0mNH4T-o.9E2',
  },
  {
    title: 'Kloster',
    year: 2017,
    img: '/img/banners/kloster.jpg',
    description:
      'Ein geheimnisvolles Drama, das in einem abgelegenen Kloster spielt.',
    link: '/recap/kloster',
    blurHash: 'L7HA@KE100-pQ*~X%ir:?w00xA-;',
  },
  {
    title: 'Kristall',
    year: 2018,
    img: '/img/banners/kristall.jpg',
    description:
      'Eine magische Geschichte über die Macht eines mystischen Kristalls.',
    link: '/recap/kristall',
    blurHash: 'L6Dl$u03XW~X00xVRMjWF*-;ohR*',
  },
  {
    title: 'Maleficarum',
    year: 2019,
    img: '/img/banners/maleficarum.jpg',
    description: 'Ein düsteres Stück über Hexerei und dunkle Magie.',
    link: '/recap/maleficarum',
    blurHash: 'L3Kc2a,;03E8{eRUl7S^01ENb@=^',
  },
  {
    title: 'Proben',
    img: '/img/banners/proben.jpg',
    description:
      'Ein Einblick in die harte Arbeit und das Engagement hinter den Kulissen.',
    link: '/recap/proben',
    blurHash: 'LAEo[Ixu~qt700IU4nM{_3j[WBxu',
  },
]

const items = recaps.map((recap) => {
  return {
    title: recap.title,
    description: recap.description,
    header: (
      <Image
        src={recap.img}
        alt={recap.title}
        width={1000}
        height={650}
        className='h-60 object-cover rounded-t-lg'
        // loading='lazy'
        blurDataURL={blurHashToDataURL(recap.blurHash)}
        placeholder='blur'
      />
    ),
  }
})
