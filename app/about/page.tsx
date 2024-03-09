'use client'
import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { TracingBeam } from '@/components/ui/tracing-beam'

import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HeroScrollDemo() {
  return (
    <div className='flex flex-col pt-20 h-full'>
      <ContainerScroll
        image={
          <Image
            src='/img/other_images/Group.webp'
            height='800'
            width='1200'
            layout='responsive'
            alt='Hero'
          />
        }
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-orange-400'>
              Über uns <br />
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                Kolpingtheater Ramsen
              </span>
            </h1>
          </>
        }
      />
      <div>
        <TracingBeam className='px-6 h-auto'>
          <div className='max-w-2xl mx-auto antialiased pt-4 relative'>
            {history.map((item, i) => (
              <div key={i} className='mb-8'>
                {i === 0 && (
                  <h1 className='text-4xl font-bold text-orange-400 dark:text-orange-400 mt-8 border-b-2 border-orange-400 dark:border-orange-400 pt-4 -ml-4 my-4'>
                    {item.date.split(' ')[1]}
                  </h1>
                )}
                <div className='text-2xl font-bold text-orange-400 dark:text-orange-400'>
                  {item.date}
                </div>
                <div className='text-lg font-semibold text-orange-400 dark:text-orange-400'>
                  {item.header}
                </div>
                <div className='text-lg text-orange-400 dark:text-orange-400'>
                  {item.text}
                </div>
                {item.image && (
                  <div className='mt-4'>
                    <a
                      href={
                        item.galleryLink ? `/recap/${item.galleryLink}` : '#'
                      }
                      className={cn(
                        'text-lg font-bold text-orange-400 dark:text-orange-400',
                        item.galleryLink ? '' : 'pointer-events-none'
                      )}
                    >
                      <Image
                        src={`/img/${item.image}`}
                        width={1200}
                        height={800}
                        layout='responsive'
                        alt={item.header}
                      />
                    </a>
                  </div>
                )}
                {history[i + 1] &&
                  history[i + 1].date.split(' ')[1] !==
                    item.date.split(' ')[1] && (
                    <h1 className='text-4xl font-bold text-orange-400 dark:text-orange-400 mt-8 border-b-2 border-orange-400 dark:border-orange-400 pt-4 -ml-4 my-4'>
                      {history[i + 1].date.split(' ')[1]}
                    </h1>
                  )}
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  )
}

const history = [
  {
    date: 'April 2014',
    header: 'Gr\xFCndung der Theatergruppe',
    text: 'Aus der spontanen Idee ein Theaterst\xFCck mit der Kolpingjugend auf die B\xFChne zu bringen, entstand nach und nach der Wunsch, eine feste Theatergruppe zu gr\xFCnden',
  },
  {
    date: 'Dezember 2014',
    header: 'Der Anfang',
    text: 'Erste vereinsinterne Auff\xFChrungen im Saal des Kolpingheims',
  },
  {
    date: 'Januar 2015',
    header: 'Premiere',
    text: 'Nachdem die Auff\xFChrungen fremder Stoffe so guten Anklang fanden, wurde beschlossen, dass man gerne ein eigenes St\xFCck auf die B\xFChne bringen wollte. Die Idee f\xFCr \u201CDie Geschichte der Black Swan\u201D war geboren.',
  },
  {
    date: 'September 2016',
    header: '\xD6ffentliche Premiere',
    text: 'Nach \xFCber einem Jahr Entwicklungs- und Probezeit, war es soweit: \u201CDie Geschichte der Black Swan\u201D feierte im Saal des Kolpingheims Premiere.',
  },
  {
    date: 'Oktober 2016',
    header: 'Outdoor-Theater',
    text: 'Nun kam die Idee auf, das Theaterspielen nach drau\xDFen zu verlegen. Zum einen bot die Kolpingwiese deutlich mehr Platz f\xFCr Zuschauer und die Atmosph\xE4re auf dem in abendliches Licht getauchtem Gel\xE4nde lud geradezu dazu ein gro\xDFe Geschichten zu erz\xE4hlen.',
  },
  {
    date: 'August 2017',
    header: '\u201CVerrat im Kloster\u201D',
    text: 'Mit \u201CVerrat im Kloster\u201D feiert die erste Open-Air-Produktion ihre Urauff\xFChrung auf der Kolpingwiese. Das St\xFCck, welches wieder aus eigener Feder stammte, beruhte lose auf historischen Tatsachen, rund um das Kloster Ramosa. So ging es im Schatten der historischen Zehntscheune hei\xDF her, als im Ramser Kloster ein K\xF6nigsmord ver\xFCbt wurde.',
    image: 'banners/kloster.jpg',
    galleryLink: 'kloster',
  },
  {
    date: 'Dezember 2017',
    header: 'Probenstart',
    text: 'Probenstart f\xFCr die Eigenproduktion \u201CBluttribut\u201D.',
  },
  {
    date: 'August 2018',
    header: '\u201CBluttribut\u201D',
    text: 'Endlich war es soweit: Die Vampire versetzten im neuen St\xFCck \u201CBluttribut\u201D die Zuschauer in Gruselstimmung, welche immer wieder durch komische Szenen aufgelockert wurde.',
    image: 'banners/bluttribut.jpg',
    galleryLink: 'bluttribut',
  },
  {
    date: 'Dezember 2018',
    header: 'Probenstart',
    text: 'Probenstart f\xFCr die Eigenproduktion \u201CDystopia\u201D',
  },
  {
    date: 'August 2019',
    header: '\u201CDystopia\u201D',
    text: 'Rauchschwaden hingen \xFCber der Kolpingwiese und entf\xFChrten die Zuschauer in eine d\xFCstere Zukunftsvision. In der titelgebenden Stadt \u201CDystopia\u201D herrschen die paramilit\xE4rischen Snakes und unterdr\xFCcken alle anderen Menschen. Dieses St\xFCck hatte insgesamt einen ernsteren und gesellschaftskritischeren Ton, als die anderen St\xFCcke. Nicht nur die Schauspieler wurden langsam erwachsener, sondern auch die Geschichten, die sie auf die B\xFChne brachten.',
    image: 'banners/dystopia.jpg',
    galleryLink: 'dystopia',
  },
  {
    date: 'Januar 2020',
    header: 'Probenstart',
    text: 'Probenstart f\xFCr die Eigenproduktion \u201CDer Kristall der Tr\xE4ume\u201D',
  },
  {
    date: 'M\xE4rz 2020',
    header: 'Coronapandemie',
    text: 'Der Probenbetrieb wurde aufgrund der Coronapandemie eingestellt',
  },
  {
    date: 'Juni 2020',
    header: 'Probenstart',
    text: 'Der Probenbetrieb f\xFCr \u201CDer Kristall der Tr\xE4ume\u201D wurde unter den geltenden Hygieneregeln wieder aufgenommen.',
  },
  {
    date: 'August 2020',
    header: '\u201CDer Kristall der Tr\xE4ume\u201D',
    text: 'Unter strengen Hygienema\xDFnahmen fand auf der Kolpingwiese die Premiere von \u201CDer Kristall der Tr\xE4ume\u201D statt. Gerade in dieser bewegten Zeit konnten die Zuschauer f\xFCr rund zwei Stunden in ein M\xE4rchenreich eintauchen und Prinzessin Merle auf der Suche nach ihrer Bestimmung begleiten. Aufgrund der begrenzten Teilnehmerzahl wurden alle Veranstaltungen live gestreamt.',
    image: 'banners/kristall.jpg',
    galleryLink: 'kristall',
  },
  {
    date: 'Januar 2021',
    header: 'Virtueller Probenstart',
    text: 'Probenstart f\xFCr die Eigenproduktion \u201CMalleus Maleficarum\u201D: Aufgrund der Coronasituation wurde zun\xE4chst virtuell per Videochat geprobt.',
  },
  {
    date: 'Mai 2021',
    header: 'Probenstart vor Ort',
    text: 'Aufnahme des Probenbetriebes in Pr\xE4senz unter Einhaltung der 3G-Regel.',
  },
  {
    date: 'August 2021',
    header: '\u201CMalleus Maleficarum\u201D',
    text: 'Am 27.08. feiert \u201CMalleus Maleficarum\u201D seine Premiere. An erstmals vier Abenden wurden die Zuschauer ins dunkle Mittelalter entf\xFChrt. Wie bereits 2017 wurde das Kloster Ramosa als Handlungsort ausgew\xE4hlt. Alle Veranstaltungen wurden, aufgrund der Zuschauerbegrenzung, wie im Vorjahr auf dem Youtubekanal des Kolping-Open-Air-Theaters live gestreamt.',
    image: 'banners/maleficarum.jpg',
    galleryLink: 'maleficarum',
  },
  {
    date: 'M\xE4rz 2022',
    header: 'Wir gewinnen einen Preis',
    text: 'Die Theatergruppe der Kolpingjugend Ramsen wurde f\xFCr ihre letztj\xE4hrige Eigenproduktion \u201CMalleus Maleficarum\u201D mit dem Kolpingjugendpreis 2022 ausgezeichnet. Die Verleihung fand in W\xFCrzburg im Rahmen der Bundeskonferenz der Kolpingjugend Deutschland statt. Die Theaterproduktion erreichte dabei den 1. Platz. Nicht nur die mitrei\xDFende und spannende Geschichte, sondern vor allem der Bezug auf aktuelle Themen, wie Religionsfreiheit, Umgang mit Fake-News oder Gleichstellung in Kirche und Gesellschaft stellte die Jury positiv heraus.',
    image: 'other_images/Kolpingjugendpreis.jpg',
  },
  {
    date: 'Mai 2022',
    header: 'Probenstart',
    text: 'Probenstart in Pr\xE4senz f\xFCr \u201CGoldfieber\u201D',
  },
  {
    date: 'September 2022',
    header: '\u201CGoldfieber\u201D',
    text: 'Das St\xFCck \u201CGoldfieber\u201D hatte seine Premiere am 2.9.2022. Mit drei weitere Auff\xFChrungen, pr\xE4sentierten wir den Zuschauern vor Ort und im Web eine unterhaltsame Cowboykom\xF6ide.',
    image: 'banners/goldfieber.jpg',
    galleryLink: 'goldfieber',
  },
  {
    date: 'April 2023',
    header: 'Probenstart',
    text: 'Probenstart f\xFCr \u201CTraum von Freiheit\u201D',
  },
  {
    date: 'August 2023',
    header: '\u201CTraum von Freiheit\u201D',
    text: 'Das St\xFCck \u201CTraum von Freiheit\u201D hatte seine Premiere. Eine packende Geschichte \xFCber Piraten, Freiheit und Freundschaft.',
    image: 'banners/freiheit.jpg',
    galleryLink: 'freiheit',
  },
  {
    date: 'Oktober 2023',
    header: 'Idee zum Winterst\xFCck',
    text: 'Um die Winterpause zu f\xFCllen, kam uns die Idee im kleineren Rahmen ein St\xFCck im Pfarheim aufzuf\xFChren. So wurde die \u201CKreativb\xFChne\u201C geboren',
  },
  {
    date: 'Dezember 2023',
    header: '\u201CSagenhaft\u201C (Kreativb\xFChne)',
    text: 'Zum Jahresende feiert das St\xFCck \u201CSagenhaft\u201C seine Premiere. 13 junge Akteure pr\xE4sentierten die mystische Sage rund um die Gr\xFCndung des Klosters Ramosa.',
    image: 'banners/sagenhaft.jpg',
    galleryLink: 'sagenhaft',
  },
].reverse()
