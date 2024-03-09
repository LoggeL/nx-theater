import { ParallaxScroll } from '@/components/ui/parallax-scroll'

const team = {
  plays: [
    '2016 “Die Geschichte der Black Swan”',
    '2017 “Verrat im Kloster”',
    '2018 “Bluttribut”',
    '2019 “Dystopia”',
    '2020 “Der Kristall der Träume”',
    '2021 “Malleus Maleficarum”',
    '2022 “Goldfieber”',
    '2023 “Traum von Freiheit”',
  ],
  current: [
    {
      name: 'Anton',
      roles: [
        'Sir Richard Black',
        'Hauptmann Lorentz',
        'Graf Harras',
        'Alan',
        'Kaiser Richard',
        'Fürstbischof Reinhard',
        'Morgan Bullock',
        'Laurent',
      ],
    },
    {
      name: 'Carina',
      roles: [
        'Jacky',
        'Prinzessin Helen',
        'Lisa',
        'Cobra',
        'Kaiserin Theresa',
        'Helene',
        'Maggy',
        'Marry Reed',
      ],
    },
    {
      name: 'Elena',
      placeholderAvatar: true,
      roles: [null, null, null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Fernanda',
      placeholderAvatar: true,
      placeholderHero: true,
      roles: [null, null, null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Franek',
      roles: [null, null, null, null, null, null, 'Richie', 'Matteo'],
    },
    {
      name: 'Fynn',
      roles: [null, null, null, null, null, null, 'George', 'Admiral Rodrigo'],
    },
    {
      name: 'Jonas',
      roles: [null, null, null, null, null, 'Ensemble', 'Jesse', 'Ensemble'],
    },
    {
      name: 'Johannes',
      roles: [
        null,
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Bestatter',
        'Ensemble',
      ],
    },
    {
      name: 'Julian',
      roles: [
        'Bühnentechnik',
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Hofarzt',
        'Ensemble',
        'Jim / John',
        'Ensemble',
      ],
    },
    {
      name: 'Lea',
      roles: [
        null,
        null,
        null,
        null,
        'Riccarda',
        'Maren',
        'Kate O`Hara',
        'Anne Bonny',
      ],
    },
    {
      name: 'Leon',
      roles: [
        null,
        'Graf Philipp',
        'Johann',
        'Lizard',
        'Jens',
        'Georg',
        'Ben McConnell',
        'Ensemble',
      ],
    },
    {
      name: 'Louis',
      roles: [
        null,
        null,
        null,
        null,
        'Arno',
        'Pater Heinrich',
        'Frank McConnel',
        'Edward Teach “Blackbeard”',
      ],
    },
    {
      name: 'Lina',
      roles: [null, null, null, null, null, null, 'Rose', 'Ensemble'],
    },
    {
      name: 'Luisa',
      roles: [
        null,
        null,
        null,
        'Cat',
        'Merle',
        'Klara',
        'Jane',
        'Sofia Mendoza',
      ],
    },
    {
      name: 'Magdalena',
      roles: [null, null, null, null, null, null, 'Ensemble', 'Carmen'],
    },
    {
      name: 'Maria',
      roles: [
        null,
        null,
        null,
        null,
        'Ensemble',
        'Ruth',
        'Lilly',
        'Isabella Mendoza',
      ],
    },
    {
      name: 'Max',
      roles: [null, null, null, null, null, 'Ensemble', 'Bill', 'Ensemble'],
    },
    {
      name: 'Maximilian',
      roles: [
        null,
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Ensemble',
        'Zeitungsausträger',
        'Ensemble',
      ],
    },
    {
      name: 'Nela',
      roles: [null, null, null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Nele',
      roles: [null, null, null, null, null, 'Ensemble', 'Annie', 'Megan'],
    },
    {
      name: 'Niko',
      roles: [null, null, null, null, null, null, 'Will', 'Ensemble'],
    },
    {
      name: 'Raphael',
      placeholderAvatar: true,
      placeholderHero: true,
      roles: [null, null, null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Sebastian',
      roles: [
        'Regie',
        'Ensemble / Regie',
        'Albert / Regie',
        'Ensemble / Regie',
        'Ensemble / Regie',
        'Ensemble / Regie',
        'Doc William Mc Allister / Regie',
        'Capitan Javier / Regie',
      ],
    },
    {
      name: 'Sophia',
      roles: [null, null, null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Theresa',
      roles: [null, null, null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Tobias',
      roles: [
        null,
        null,
        null,
        null,
        'Ensemble',
        'Ensemble',
        'Edward Smith',
        'Ensemble',
      ],
    },
    {
      name: 'Yunus',
      roles: [
        null,
        null,
        null,
        null,
        null,
        'Technik',
        'Thomas',
        'Jack Rackham',
      ],
    },
  ],
  former: [
    {
      name: 'Anna',
      roles: ['Susan Campbell', 'Anne', 'Ida', 'Moon', 'Emily', 'Ensemble'],
    },
    {
      name: 'Anna R',
      roles: ['Alice', 'Stumpfwaldhexe', 'Hausgeist Anastasia', 'Lilly'],
    },
    {
      name: 'Anika',
      roles: ['Ensemble', 'Ensemble', 'Ensemble'],
    },
    {
      name: 'Frankie',
      roles: [null, null, null, 'Vyper'],
    },
    {
      name: 'Jack',
      roles: [
        null,
        null,
        null,
        'Cover Moon/ Ensemble',
        'Dr. von Hofmannsthal',
        'Pater Markus',
      ],
    },
    {
      name: 'Laura',
      roles: ['Lucy', 'Ensemble', 'Ensemble', 'Ensemble'],
    },
    {
      name: 'Leonhard',
      roles: ['Gouverneur Campbell', 'Kaiser Heinrich', 'Wirt Otto', 'Richy'],
    },
    {
      name: 'Marc',
      roles: [null, null, null, null, 'Theodor', 'Wilhelm'],
    },
    {
      name: 'Marleen',
      roles: ['Kate Campbell', 'Prinzessin Elisabeth', 'Martha', 'Mira'],
    },
    {
      name: 'Paul',
      roles: [null, null, 'Ensemble', 'Ensemble', 'Ensemble'],
    },
    {
      name: 'Paulina',
      roles: [null, null, null, null, null, 'Ensemble'],
    },
    {
      name: 'Till',
      roles: [
        null,
        'Mattes',
        'Hans',
        'Python',
        'Archibald',
        'Barde Mattes',
        'Eddie',
      ],
    },
    {
      name: 'Toni',
      roles: ['Captain Anne', 'Agnes', 'Emma'],
    },
  ],
  tech: [
    {
      name: 'Christian',
      icon: 'camera',
      job: 'Videotechnik',
    },
    {
      name: 'Daniel',
      icon: 'lightbulb',
      job: 'Lichttechnik',
    },
    {
      name: 'Florian',
      icon: 'settings',
      job: 'Bühnentechnik',
    },
    {
      name: 'Leo',
      icon: 'settings',
      job: 'Bühnentechnik',
    },
    {
      name: 'Noah',
      icon: 'lightbulb',
      job: 'Lichttechnik',
    },
    {
      name: 'Wolfgang',
      icon: 'headphones',
      job: 'Tontechnik',
    },
  ],
}

const actors = team.current

export default function Team() {
  return (
    <div className='h-screen w-screen rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
      <ParallaxScroll actors={actors}></ParallaxScroll>
    </div>
  )
}

// Path: app/team/page.tsx
