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
        {/* 3 Col setup */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='w-full h-full aspect-square relative order-first sm:order-none'>
            <div className='text-3xl font-bold text-orange-500 md:hidden sm:block p-8'>
              {actor.name}
            </div>
            <Image
              // src={'/img/team/avatar/' + name + '.jpg'}
              src='/img/other_images/placeholder.webp'
              height='2000'
              width='1000'
              className='object-cover rounded-xl mx-auto'
              alt={name}
              priority={true}
              loading='eager'
              placeholder='blur'
              blurDataURL={blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')}
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
              <table>
                {roles.map((role) => (
                  <tr
                    key={role.role}
                    className='border-t-2 border-b-2 border-white border-opacity-50'
                  >
                    <td className='text-white pr-4'>{role.play}</td>
                    <td className='text-white'>{role.role}</td>
                  </tr>
                ))}
              </table>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
