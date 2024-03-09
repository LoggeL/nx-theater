import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'

type TeamCardProps = {
  actor: any
}

function TeamCard({ actor }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')
  const [transitionDuration, setTransitionDuration] = useState('300ms')
  const [boxShadow, setBoxShadow] = useState('0 1px 5px #00000099')
  let imageSrc = actor.placeholderHero
    ? `/img/team/avatar/placeholder.svg`
    : `/img/team/avatar/${actor.name}.jpg`

  useEffect(() => {
    const card: HTMLDivElement | null = cardRef?.current

    if (!card) return

    const bounds = card.getBoundingClientRect()

    function rotateToMouse(e: { offsetX: any; offsetY: any }) {
      const leftX = e.offsetX
      const topY = e.offsetY
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      }

      setBackgroundImage(`
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `)
    }

    card.addEventListener('mousemove', rotateToMouse)
    card.addEventListener('mouseleave', () => {
      setTransform('')
      setBackgroundImage('')
    })

    return () => {
      card.removeEventListener('mousemove', rotateToMouse)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className='card aspect-square cursor-pointer rounded-lg'
      style={{
        fontWeight: 'bold',
        boxShadow,
        position: 'relative',
        transitionDuration,
        transitionProperty: 'transform, box-shadow',
        transitionTimingFunction: 'ease-out',
        transform: transform,
      }}
      onMouseOver={() => {
        setTransitionDuration('150ms')
        setBoxShadow('0 5px 20px 5px #00000044')
      }}
      onMouseOut={() => {
        setTransitionDuration('300ms')
        setBoxShadow('0 1px 5px #00000099')
      }}
      onClick={
        // Navigate to the team member page
        () => {
          window.location.href = '/team/' + actor.name
        }
      }
    >
      <Image
        src={imageSrc}
        alt='Team member'
        className='rounded-lg object-cover'
        sizes='100% 100%'
        placeholder='blur'
        blurDataURL={blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')}
        fill
        priority={true}
      />
      <div className='absolute flex bg-black bg-opacity-50 text-white m-2 p-2 rounded-lg justify-end items-top right-0'>
        {actor.name}
      </div>
      <div
        className='glow rounded-lg'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '0',
          top: '0',
          backgroundImage: backgroundImage,
        }}
      />
    </div>
  )
}

export default TeamCard
