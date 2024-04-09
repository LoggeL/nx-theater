import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import Image from 'next/image'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

import team from '@/components/data/team.json'

interface TechMemberProps {
  params: {
    name: string
  }
}

export default function TechMemberPage({ params }: TechMemberProps) {
  const name = params.name
  const tech = team.tech.find((tech) => tech.name === name)
  if (!tech) {
    return <div>404</div>
  }
  const roles = tech.roles
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
              {tech.name}
            </div>
            <Image
              src={
                tech.placeholder
                  ? blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
                  : '/img/team/' + name + '.jpg'
              }
              width={1500}
              height={2300}
              className='object-cover rounded-xl mx-auto sm:w-full md:w-3/4 lg:w-1/2'
              alt={name}
              priority={true}
              loading='eager'
              placeholder='blur'
              style={{
                aspectRatio: '2/3',
              }}
              blurDataURL={
                tech.blurhash
                  ? blurHashToDataURL(tech.blurhash)
                  : blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
              }
            />
          </div>
          <div className='p-4'>
            <div className='text-3xl font-bold text-orange-500 sm:hidden md:block '>
              {tech.name}
            </div>
            <p className='text-lg font-bold text-white'>
              <br />
              Paar Daten
              <br />
              Noch mehr Daten
              <br />
              <br />
              Spezialist für:
              <br />
            </p>
            <div className='w-full'>
              {roles.map((role) => (
                <div key={role} className='mt-2'>
                  <p className='text-white text-2xl'>{role}</p>
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
