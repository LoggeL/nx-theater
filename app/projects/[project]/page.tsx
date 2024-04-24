import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'
import Image from 'next/image'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'

import projects from '@/components/data/projects.json'

interface ProjectPageProps {
  params: {
    project: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const id = params.project
  const project = projects.find((project) => project.id == id)
  console.log(projects, id)
  if (!project) {
    return <div>404</div>
  }
  return (
    <div className='h-full w-full'>
      {/* Dump some basic info (later md files) */}
      <h1 className='text-4xl font-bold text-center mb-10 pt-20 text-orange-400 mt-32'>
        {project.name}
      </h1>
      <Image
        src={
          project.placeholder
            ? blurHashToDataURL('LKK15b0L~q$x%hD%%Max9bV[bbW=')
            : `/img/projects/${project.id}.jpg`
        }
        width={1600}
        height={1200}
        className='w-full rounded-xl'
        alt={project.name}
        placeholder='blur'
        blurDataURL={
          project.blurhash
            ? blurHashToDataURL(project.blurhash)
            : blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
        }
      />
    </div>
  )
}
