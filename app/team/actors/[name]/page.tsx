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
      <div className='p-8 max-w-8xl mx-auto relative z-10 w-full mt-32'>
        {/* n Col setup */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='w-full h-full relative order-first sm:order-none'>
            <div className='text-3xl font-bold text-orange-500 md:hidden sm:block p-8'>
              {actor.name}
            </div>
            <Image
              src={
                actor.placeholder
                  ? blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
                  : '/img/team/' + name + '.jpg'
              }
              height='2000'
              width='1000'
              className='object-cover rounded-xl mx-auto sm:w-full md:w-3/4 lg:w-1/2'
              alt={name}
              priority={true}
              loading='eager'
              placeholder='blur'
              blurDataURL={
                actor.blurhash
                  ? blurHashToDataURL(actor.blurhash)
                  : blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
              }
            />
          </div>
          <div className='p-4'>
            <div className='text-3xl font-bold text-orange-500 sm:hidden md:block '>
              {actor.name}
            </div>
            <p className='text-lg font-bold text-white'>
              <br />
              Paar Daten
              <br />
              Noch mehr Daten
              <br />
              <br />
              Hat mitgespielt in:
              <br />
            </p>
            <div className='w-full'>
              <div>
                <p className='text-white w-1/2 float-left'>Stück</p>
                <p className='text-white w-1/2 float-right'>Rolle</p>
                <div className='w-full clear-both border-b-white border-solid border-2 border-opacity-20 mt-2'></div>
              </div>
              {roles.map((role) => (
                <div key={role.role} className='mt-2'>
                  <p className='text-white w-1/2 float-left'>{role.play}</p>
                  <p className='text-white w-1/2 float-right'>{role.role}</p>
                  <div className='w-full clear-both border-b-white border-solid border-2 border-opacity-20 mt-2'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
