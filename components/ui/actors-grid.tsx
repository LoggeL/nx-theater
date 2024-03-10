'use client'
import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Card = {
  id: number
  content: JSX.Element | React.ReactNode | string
  className: string
}

export const ActorsGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:gird-cols-5 p-10 mx-auto gap-4 '>
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          <div className='relative overflow-hidden rounded-lg w-full h-full aspect-square'>
            {card.content}
          </div>
        </div>
      ))}
    </div>
  )
}
