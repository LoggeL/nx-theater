import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import Image from 'next/image'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { InfiniteMovingCards } from '@/components/ui/actors-plays'

import team from '@/components/data/team.json'

interface TeamMemberProps {
  params: {
    name: string
  }
}

export default function TeamMemberPage({ params }: TeamMemberProps) {
  const name = params.name
  const actor = team.current.find((actor) => actor.name === name)
  if (!actor) {
    return <div>404</div>
  }
  const plays = team.plays
  const roles = actor.roles
    .map((role, index) => {
      return {
        play: plays[index] || 'Unbekanntes Stück',
        role: role,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus.',
      }
    })
    .filter((role) => role.role)
  return (
    <div className='h-full w-full'>
      {/* Spotlight */}
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 h-full'
        fill='white'
      />
      <div className='p-4 max-w-7xl mx-auto relative z-10 w-full mt-32'>
        {/* 3 Col setup */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div
            className='w-full max-w-full relative rounded-xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
          >
            {/* About */}
            <div className='text-center text-4xl font-bold text-orange-500'>
              Über mich
            </div>
            <div className='text-lg text-white font-normal mt-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque
              nihil. Sapiente impedit eveniet ipsum voluptates sint nobis culpa
              rerum velit, excepturi nemo eius nostrum, beatae, accusamus
              molestias non dignissimos?
            </div>
          </div>
          <div className='w-full h-full aspect-square relative order-first sm:order-none'>
            <Image
              src={'/img/team/avatar/' + name + '.jpg'}
              height='1000'
              width='1000'
              className='object-cover rounded-xl mx-auto aspect-square'
              alt={name}
              priority={true}
              loading='eager'
              placeholder='blur'
              blurDataURL={blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')}
            />
            <div
              className='absolute inset-0'
              style={{
                background:
                  'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 00), rgba(0, 0, 0, 0))',
              }}
            >
              <div className='absolute bottom-0 left-0 w-full  p-4 text-orange-400  text-2xl font-bold text-center'>
                {name}
              </div>
            </div>
          </div>
          <div
            className='w-full max-w-full relative rounded-xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6'
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
          >
            {/* Tasks */}
            <div className='text-center text-4xl font-bold text-orange-500'>
              Meine Stärken
            </div>
            <ul className='text-lg text-white font-normal mt-8'>
              <li>Stärke 1</li>
              <li>Stärke 2</li>
              <li>Stärke 3</li>
              <li>Ich habe keine Stärken</li>
            </ul>
          </div>
        </div>

        {/* Roles */}
        <div className='text-center text-4xl font-bold mt-16 text-orange-500 w-full'>
          Rollen
        </div>
        <div className='rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center  relative overflow-hidden'>
          <InfiniteMovingCards items={roles} direction='right' speed='slow' />
        </div>
      </div>
    </div>
  )
}
