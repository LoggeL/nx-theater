'use client'

import React from 'react'
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
      thumb_src: `/img/gallery_thumbs/${play}/Bild (${i + 1}).jpg`,
      full_src: `/img/gallery_full/${play}/Bild (${i + 1}).jpg`,
      blurHash: pic.blurhash,
      width: pic.width,
      height: pic.height,
      alt: pic.alt,
    })
  )

  const [currentLightboxIndex, setCurrentLightboxIndex] = React.useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false)

  return (
    <>
      <div className='flex flex-col items-center w-full overflow-auto'>
        <h1 className='text-4xl font-bold text-center mb-10 pt-36 text-orange-400'>
          {play.toUpperCase()}
        </h1>
        <div className='p-4 w-full'>
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4'>
            {cards.map((card) => (
              <div key={card.id} className='break-inside-avoid mb-4'>
                <div
                  className='relative group cursor-pointer'
                  onClick={() => {
                    setCurrentLightboxIndex(card.id)
                    setIsLightboxOpen(true)
                  }}
                >
                  <Image
                    width={card.width}
                    height={card.height}
                    src={card.thumb_src}
                    className='w-full rounded-xl'
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
                    <p className='text-white bottom-0 mt-auto p-2'>
                      {card.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div id='lightbox' className='fixed inset-0 z-50'>
          <div className='absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center'>
            <div
              className='relative h-screen w-screen'
              onClick={() => setIsLightboxOpen(false)}
            >
              <Image
                src={cards[currentLightboxIndex].full_src}
                className='mx-auto max-h-screen max-w-screen w-auto h-auto z-10 relative'
                alt={cards[currentLightboxIndex].alt}
                objectFit='contain'
                placeholder='blur'
                blurDataURL={blurHashToDataURL(
                  cards[currentLightboxIndex].blurHash
                )}
                width={cards[currentLightboxIndex].width}
                height={cards[currentLightboxIndex].height}
              />
              {/* Background */}
              <div
                className='absolute inset-0 z-0 transition-all duration-500 ease-in-out'
                style={{
                  backgroundImage: `url(${blurHashToDataURL(
                    cards[currentLightboxIndex].blurHash
                  )})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>

            {/* Next */}
            <div
              className='absolute top-0 right-0 h-full w-20 flex items-center justify-center cursor-pointer'
              onClick={() =>
                setCurrentLightboxIndex(
                  (currentLightboxIndex + 1) % cards.length
                )
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-white transform rotate-180 hover:scale-125 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </div>

            {/* Previous */}
            <div
              className='absolute top-0 left-0 h-full w-20 flex items-center justify-center cursor-pointer'
              onClick={() =>
                setCurrentLightboxIndex(
                  (currentLightboxIndex - 1) % cards.length
                )
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-white hover:scale-125 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </div>

            {/* Close */}
            <div
              className='absolute top-0 right-0 h-20 w-20 flex items-center justify-center cursor-pointer'
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-white hover:scale-125 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>

            {/* Text */}
            <p className='absolute bottom-0 left-0 p-4 text-white z-20 font-bold text-center w-full bg-black bg-opacity-50'>
              {cards[currentLightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
