import { ParallaxScroll } from '@/components/ui/parallax-scroll'

const actors = team.current

export default function Team() {
  return (
    <div className='h-screen w-screen rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
      <ParallaxScroll actors={actors}></ParallaxScroll>
    </div>
  )
}

// Path: app/team/page.tsx
