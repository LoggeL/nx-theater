'use client'

import { Spotlight } from '../components/ui/spotlight'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card'

export default function Home() {
  return (
    <div className='h-full w-full rounded-md flex flex-col md:items-center md:justify-center  relative overflow-hidden'>
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
      <div>
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
