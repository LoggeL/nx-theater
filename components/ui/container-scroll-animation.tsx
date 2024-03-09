'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export const ContainerScroll = ({
  image,
  titleComponent,
}: {
  image: React.ReactNode
  titleComponent: string | React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())

  return (
    <div
      className='h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 w-9/12 mx-auto'
      ref={containerRef}
    >
      <div
        className='py-10 md:py-40 w-full relative'
        style={{
          perspective: isMobile ? '2000px' : '1000px',
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} image={image} />
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className='div max-w-5xl mx-auto text-center'
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  image,
}: {
  rotate: any
  scale: any
  image: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className='mx-auto w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl'
    >
      <div className='bg-gray-100 h-full w-full rounded-2xl'>
        <motion.div
          className='bg-white rounded-md cursor-pointer relative'
          whileHover={{
            boxShadow:
              '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          }}
        >
          {image}
        </motion.div>
      </div>
    </motion.div>
  )
}
