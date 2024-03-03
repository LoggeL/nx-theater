import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'

type TeamCardProps = {
  image: string
}

function TeamCard({ image }: TeamCardProps) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')
  const [transitionDuration, setTransitionDuration] = useState('300ms')
  const [boxShadow, setBoxShadow] = useState('0 1px 5px #00000099')
  // const [imageSrc, setImageSrc] = useState(null)
  let imageSrc = `/img/team/avatar/${image}.jpg`

  useEffect(() => {
    const card = cardRef.current
    const bounds = card.getBoundingClientRect()

    function rotateToMouse(e: { offsetX: any; offsetY: any }) {
      const leftX = e.offsetX
      const topY = e.offsetY
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      }
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

      setTransform(`
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 4}deg
        )
      `)

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
          console.log('Navigate to the team member page')
          window.location.href = '/team/' + image
        }
      }
    >
      <Image
        src={imageSrc}
        alt='Team member'
        className='rounded-lg object-cover'
        sizes='100% 100%'
        fill
        // onError={(e) => {
        //   // If error loading image, set the default image
        //   e.currentTarget.onerror = null // Prevent infinite loop
        //   console.log('Error loading image', e)
        //   imageSrc = '/img/team/avatar/Placeholder.svg'
        // }}
      />
      <div className='absolute flex bg-black bg-opacity-50 text-white m-2 p-2 rounded-lg justify-end items-top right-0'>
        {image}
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
