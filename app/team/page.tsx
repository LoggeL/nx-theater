import team from '@/components/data/team.json'
import Link from 'next/link'

export default function Team() {
  return (
    <div className='flex flex-col h-full w-full'>
      {/* Link to actors and tech */}
      <div className='flex justify-center items-center flex-col h-20 w-full bg-gray-800 text-gray-100 mt-48'>
        <Link href='/team/actors'>Schauspieler</Link>
        <Link href='/team/tech'>Technik</Link>
      </div>
    </div>
  )
}

// Path: app/team/page.tsx
