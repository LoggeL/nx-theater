import team from '@/components/data/team.json'
import { ActorsGrid } from '@/components/ui/actors-grid'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { DirectionAwareHover } from '@/components/ui/team-grid'

const cards = team.current.map((actor, i) => ({
  id: i,
  className: 'md:col-span-1',
  content: (
    <DirectionAwareHover
      link={`/team/actors/${actor.name}`}
      imageUrl={
        actor.placeholderAvatar
          ? blurHashToDataURL('LuD,jJyGEANPyXtRV@WBc6ounOR*')
          : `/img/team/avatar/${actor.name}.jpg`
      }
    >
      <p className='font-bold text-xl'>{actor.name}</p>
    </DirectionAwareHover>
  ),
  link: `/team/actors/${actor.name}`,
}))

export default function Team() {
  return (
    <div className='h-screen py-20 w-full'>
      <h1 className='text-4xl font-bold text-center mb-10 pt-20 text-orange-400'>
        Unser Ensemble
      </h1>
      <ActorsGrid cards={cards} />
    </div>
  )
}

// Path: app/team/page.tsx
