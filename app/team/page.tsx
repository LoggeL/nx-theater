import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import team from '@/components/data/team.json'

export default function Team() {
  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex pt-20 h-auto w-full'>
        <ParallaxScroll actors={team.current}></ParallaxScroll>
      </div>
      <div className='flex pt-20 h-auto w-full'>
        <ParallaxScroll actors={team.former}></ParallaxScroll>
      </div>
    </div>
  )
}

// Path: app/team/page.tsx
