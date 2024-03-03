import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image'

interface Props {
  name: string
}

const TeamMeberPage: React.FC<Props & { params: { name: string } }> = ({
  params,
}) => {
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
          <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 pb-2'>
            <div className='text-4xl md:text-6xl'>{name}</div>
          </h1>
          <Image
            src={'/img/team/avatar/' + name + '.jpg'}
            height='1000'
            width='1000'
            className='h-52 w-full object-contain rounded-xl mt-28'
            alt='Kolping Logo'
          />
        </div>
      </div>
      <div className='h-full w-full flex md:items-center md:justify-center bg-black/[0.96] relative'>
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

const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
)

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

const items = recaps.map((recap) => ({
  title: recap.title,
  description: recap.description,
  header: (
    <Image
      src={recap.img}
      alt={recap.title}
      width={1000}
      height={1000}
      className='w-full h-60 object-cover rounded-t-lg'
    />
  ),
}))

export default TeamMeberPage
