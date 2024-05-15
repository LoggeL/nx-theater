'use client'

import Image from 'next/image'
import news from '@/components/data/news.json'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-screen py-20 w-full'>
      <h1 className='text-4xl font-bold text-center mb-10 pt-20 text-orange-400'>
        News
      </h1>
      <div>
        {news.map((newsData) => (
          <div key={newsData.id} className='m-8 p-2'>
            <Link href={`/news/${newsData.id}`}>
              <div className='relative'>
                <p className='text-orange-400 bottom-0 mt-auto text-3xl font-bold underline'>
                  {newsData.title}
                </p>
              </div>
            </Link>

            <div className='text-lg font-semibold text-orange-400 dark:text-orange-400'>
              {newsData.date}
            </div>

            <div className='text-lg text-orange-400 dark:text-orange-400'>
              {newsData.description}
            </div>

            <Link
              href={`/news/${newsData.id}`}
              className='text-lg font-bold text-orange-400 dark:text-orange-400'
            >
              > Zum Artikel
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
