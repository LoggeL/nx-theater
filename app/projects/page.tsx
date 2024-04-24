import projects from '@/components/data/projects.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className='h-screen py-20 w-full'>
      <h1 className='text-4xl font-bold text-center mb-10 pt-20 text-orange-400'>
        Unsere sonstigen ehrenamtlichen Projekte
      </h1>
      <div className='flex items-center w-full overflow-auto'>
        <div className='p-4 w-full'>
          <div className='flex flex-wrap'>
            {projects.map((project) => (
              <div
                key={project.name}
                className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'
              >
                <Link href={`/projects/${project.id}`}>
                  <div className='relative group'>
                    <Image
                      width={1600}
                      height={1200}
                      src={
                        project.placeholder
                          ? blurHashToDataURL('LKK15b0L~q$x%hD%%Max9bV[bbW=')
                          : `/img/projects/${project.id}.jpg`
                      }
                      // src='/img/team/avatar/Sebastian.jpg'
                      className='w-full rounded-xl'
                      alt={project.name}
                      placeholder='blur'
                      blurDataURL={
                        project.blurhash
                          ? blurHashToDataURL(project.blurhash)
                          : blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
                      }
                    />
                    <div
                      className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
                      style={{
                        background:
                          'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                      }}
                    >
                      <p className='text-orange-400 bottom-0 mt-auto p-2 text-3xl font-bold'>
                        {project.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Path: app/team/page.tsx
