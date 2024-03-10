import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import Image from 'next/image'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

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
  return (
    <div className='h-full w-full'>
      {/* Spotlight */}
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 h-full'
        fill='white'
      />
      <div className='p-4 max-w-7xl mx-auto relative z-10 w-full mt-56'>
        {/* 2 Col setup */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='w-full h-full aspect-square'>
            <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 pb-2 mb-10'>
              <div className='text-4xl md:text-6xl'>{name}</div>
            </h1>
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
          </div>
          <div className='h-full w-full md:items-center md:justify-center relative grid grid-cols-2 gap-4'>
            <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 pb-2 mb-10 col-span-2 block'>
              <div className='text-4xl md:text-6xl align-top'>Rollen</div>
            </h1>
            {/* Map Actor Roles */}
            {actor.roles.map(
              (role, i) =>
                role && (
                  <div
                    key={i}
                    className={`col-span-2 border-b-2 border-orange-400 ${
                      i == 0 ? 'border-t-2' : ''
                    }`}
                  >
                    <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 py-2 mb-4'>
                      <div className='text-2xl md:text-4xl'>{role}</div>
                    </h1>
                    <p className='text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 bg-opacity-50 py-2 mb-4'>
                      {team.plays[i]}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
