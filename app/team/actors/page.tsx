import team from '@/components/data/team.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import Image from 'next/image'
import Link from 'next/link'

export default function Team() {
  return (
    <div className='h-screen py-20 w-full'>
      <h1 className='text-4xl font-bold text-center mb-10 pt-20 text-orange-400'>
        Unser Ensemble
      </h1>
      <div className='flex items-center w-full overflow-auto'>
        <div className='p-4 w-full'>
          <div className='flex flex-wrap'>
            {team.current.map((actor) => (
              <div
                key={actor.name}
                className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'
              >
                <Link href={`/team/actors/${actor.name}`}>
                  <div className='relative group'>
                    <Image
                      width={400}
                      height={800}
                      // src={`/img/team/avatar/${actor.name}.jpg`}
                      src='/img/team/avatar/Sebastian.jpg'
                      className='w-full rounded-xl'
                      alt={actor.name}
                      placeholder='blur'
                      blurDataURL={blurHashToDataURL(
                        'LuD,jJyGEANPyXtRV@WBc6ounOR*'
                      )}
                    />
                    <div
                      className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
                      style={{
                        background:
                          'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                      }}
                    >
                      <p className='text-orange-400 bottom-0 mt-auto p-2 text-3xl font-bold'>
                        {actor.name}
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
