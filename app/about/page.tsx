'use client'
import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

import Image from 'next/image'
import { cn } from '@/lib/utils'

import history from '@/components/data/history.json'
// Reverse
history.reverse()

export default function HeroScrollDemo() {
  return (
    <div className='flex flex-col pt-20 h-full w-full'>
      <ContainerScroll
        image={
          <Image
            src='/img/other_images/Group.webp'
            blurDataURL={blurHashToDataURL('LeGI=i%MWAxu_4ofWWofx]ayWBWV')}
            placeholder='blur'
            height='1320'
            width='1800'
            alt='Hero'
          />
        }
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-orange-400'>
              Über uns <br />
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                Kolpingtheater Ramsen
              </span>
            </h1>
          </>
        }
      />
      <div>
        <TracingBeam className='px-6 h-auto'>
          <div className='max-w-2xl mx-auto antialiased pt-4 relative'>
            {history.map((item, i) => (
              <div key={i} className='mb-8'>
                {i === 0 && (
                  <h1 className='text-4xl font-bold text-orange-400 dark:text-orange-400 mt-8 border-b-2 border-orange-400 dark:border-orange-400 pt-4 -ml-4 my-4'>
                    {item.date.split(' ')[1]}
                  </h1>
                )}
                <div className='text-2xl font-bold text-orange-400 dark:text-orange-400'>
                  {item.date}
                </div>
                <div className='text-lg font-semibold text-orange-400 dark:text-orange-400'>
                  {item.header}
                </div>
                <div className='text-lg text-orange-400 dark:text-orange-400'>
                  {item.text}
                </div>
                {item.image && (
                  <div className='mt-4'>
                    <a
                      href={
                        item.galleryLink ? `/recap/${item.galleryLink}` : '#'
                      }
                      className={cn(
                        'text-lg font-bold text-orange-400 dark:text-orange-400',
                        item.galleryLink ? '' : 'pointer-events-none'
                      )}
                    >
                      <Image
                        src={`/img/${item.image}`}
                        width={1200}
                        height={800}
                        alt={item.header}
                      />
                    </a>
                  </div>
                )}
                {history[i + 1] &&
                  history[i + 1].date.split(' ')[1] !==
                    item.date.split(' ')[1] && (
                    <h1 className='text-4xl font-bold text-orange-400 dark:text-orange-400 mt-8 border-b-2 border-orange-400 dark:border-orange-400 pt-4 -ml-4 my-4'>
                      {history[i + 1].date.split(' ')[1]}
                    </h1>
                  )}
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  )
}
