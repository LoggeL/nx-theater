'use client'

import React, { useState, useRef, useEffect } from 'react'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import Image from 'next/image'

import pics from '@/components/data/pics.json'

export default function PlayRecapPage({
  params,
}: {
  params: { play: string }
}) {
  const play = params.play

  const cards = pics[play as keyof typeof pics].map(
    (
      pic: {
        blurhash: string
        alt: string
        width: number
        height: number
      },
      i: number
    ) => ({
      id: i,
      content: (
        <div>
          <p className='font-bold text-2xl text-white'>{pic.alt}</p>
        </div>
      ),
      className: 'md:col-span-1 h-full',
      src: `/img/gallery_full/${play}/Bild (${i + 1}).jpg`,
      blurHash: pic.blurhash,
      width: pic.width,
      height: pic.height,
      alt: pic.alt,
    })
  )

  return (
    <div className='h-screen w-full'>
      <h1 className='text-4xl font-bold text-center mb-10 pt-36 text-orange-400'>
        {play.toUpperCase()}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {cards.map((card) => (
          <div key={card.id} className={card.className}>
            <a href={card.src} target='_blank' rel='noopener noreferrer'>
              <div className='relative h-full w-full'>
                <Image
                  width={card.width}
                  height={card.height}
                  src={card.src}
                  className='object-cover h-full w-full rounded-xl'
                  style={{ aspectRatio: `${card.width}/${card.height}` }}
                  alt={card.alt}
                  placeholder='blur'
                  blurDataURL={blurHashToDataURL(card.blurHash)}
                />
                <div
                  className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200'
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                  }}
                >
                  <p className='text-white bottom-0 mt-auto p-2'>{card.alt}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
