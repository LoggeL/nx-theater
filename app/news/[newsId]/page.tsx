/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

// import news from '@/components/data/news.json'

interface NewsPageProps {
  params: {
    newsId: string
  }
}

export default function NewsPage({ params }: NewsPageProps) {
  //   const id = params.project
  //   const newsData = news.find((newsData) => newsData.id == id)
  //   if (!newsData) {
  //     return <div>404</div>
  //   }
  // fetch markdown file form public/news/{newsId}.md
  const [markdown, setMarkdown] = useState('*Loading...*')
  useEffect(() => {
    fetch(`${params.newsId}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
  }, [params.newsId])

  return (
    <div className='h-full w-full'>
      <p className='my-36 text-2xl text-white max-w-screen-lg mx-auto'>
        {/* Back to root */}
        <a href='/news' className='text-blue-500'>
          ⬅️ Zurück zur Startseite
        </a>
        <Markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 {...props} className='text-4xl font-bold my-3' />
            ),
            p: ({ node, ...props }) => <p {...props} className='text-lg' />,
            a: ({ node, ...props }) => (
              <a {...props} className='text-blue-500' />
            ),
            // make images clickable
            img: ({ node, ...props }) => (
              <a href={props.src} target='_blank' rel='noreferrer'>
                <img {...props} />
              </a>
            ),
          }}
        >
          {markdown}
        </Markdown>
      </p>
    </div>
  )
}
