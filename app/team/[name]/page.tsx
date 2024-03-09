import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

import plays from '@/components/data/plays.json'

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

const items = plays.map((play) => {
  return {
    title: play.title,
    description: play.description,
    header: (
      <Image
        src={play.img}
        alt={play.title}
        width={1000}
        height={650}
        className='h-60 object-cover rounded-t-lg'
        loading='lazy'
        blurDataURL={blurHashToDataURL(play.blurHash)}
        placeholder='blur'
      />
    ),
  }
})
