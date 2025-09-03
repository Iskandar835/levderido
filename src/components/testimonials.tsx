'use client'

import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Button } from './button'
import { Container } from './container'
import NewTag from './new-tag'
import { Heading, Subheading } from './text'
import { TheVideoModal } from './video-modal'

const testimonials = [
  {
    id: 'hqu69',
    img: '/posters/arbre-a-came-daudet.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/arbre-à-came.mp4',
    name: "L'arbre à came",
    quote: 'Voir un extrait',
    date: '2014-09-13T00:00:00Z',
  },
  {
    id: 'mpq25',
    img: '/posters/double-axelle-daudet.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/double-axelle.mp4',
    name: 'Double axel-le',
    quote: 'Voir un extrait',
    date: '2023-07-01T00:00:00Z',
  },
  {
    id: 'bhu33',
    img: '/posters/cest-pas-si-facile-daudet.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/cest-pas-si-facile.mp4',
    name: "C'est pas si facile",
    quote: 'Voir un extrait',
    date: '2022-05-20T00:00:00Z',
  },
  {
    id: 'sdf96',
    img: '/posters/le-coupable-colbert.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/le-coupable-est-dans-la-salle.mp4',
    name: 'Le coupable est dans la salle',
    quote: 'Voir un extrait',
    date: '2024-09-06T00:00:00Z',
  },
  {
    id: 'nhy11',
    img: '/posters/par-la-lorgnette-daudet.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/par-la-lorgnette.mp4',
    name: 'Par la lorgnette',
    quote: 'Voir un extrait',
    date: '2015-11-10T00:00:00Z',
  },
  {
    id: 'qss55',
    img: '/posters/sale-attente-daudet.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/sale-attente.mp4',
    name: 'Sale attente',
    quote: 'Voir un extrait',
    date: '2023-06-30T00:00:00Z',
  },
  {
    id: 'msk88',
    img: '/posters/soiree-pyjama-un-monde-a-nous.jpg',
    isNew: false,
    videoAvailable: true,
    video: '/plays/soirée-pyjama.mp4',
    name: 'Soirée pyjama',
    quote: 'Voir un extrait',
    date: '2024-10-04T00:00:00Z',
  },
  {
    id: 'isk38',
    img: '/posters/paul-ma-laisser-ça-cle.png',
    isNew: true,
    videoAvailable: false,
    video: '',
    name: 'Paul ma laisser ça clé',
    quote: 'Lire le resumé',
    date: '2025-10-04T00:00:00Z',
    description:
      "Quand Sophie vient cambrioler cet appartement apparemment vide pour le week-end, elle ne se doute pas que Paul, le locataire, a tendance à laisser sa clé à bien du monde. Surprise en flagrant délit, elle va être obligée de mentir et de changer d'identité pour essayer de se sortir d'affaires. Mais ce qu'elle ne sait pas, c'est qu'elle est chez Paul, champion du monde toute catégorie du bobard…",
  },
]

function ModalButton({
  content,
  isVideo,
  video,
  description,
}: {
  content: string
  isVideo: boolean
  video: string
  description?: string
}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button variant="secondary" onClick={() => setShowModal(true)}>
        {content}
      </Button>
      {showModal &&
        createPortal(
          <TheVideoModal
            isVideo={isVideo}
            video={video}
            description={description}
            closeModal={() => setShowModal(false)}
          />,
          document.body,
        )}
    </>
  )
}

function TestimonialCard({
  bounds,
  scrollX,
  img,
  isNew,
  children,
  date,
  isVideo,
  quote,
  video,
  description,
  ...props
}: {
  bounds: RectReadOnly
  scrollX: MotionValue<number>
  img: string
  isNew: boolean
  children: React.ReactNode
  date: string
  isVideo: boolean
  quote: string
  video: string
  description?: string
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <img
        alt="Affiches des représentations"
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      {isNew && (
        <div className="absolute top-4 left-4 z-1000">
          <NewTag />
        </div>
      )}
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-lg font-semibold text-white uppercase">
            <span
              aria-hidden="true"
              className="absolute -translate-x-full"
            ></span>
            {children}
            <span aria-hidden="true" className="absolute"></span>
          </p>
        </blockquote>
        <figcaption className="mt-4 border-t border-white/20 pt-4">
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              {date}
            </span>
          </p>
          <ModalButton
            isVideo={isVideo}
            content={quote}
            video={video}
            description={description}
          />
        </figcaption>
      </figure>
    </motion.div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  const sortPerformances = testimonials.sort((perfA, perfB) =>
    new Date(perfA.date) > new Date(perfB.date) ? -1 : 1,
  )

  const isoToNiceDisplay = (date: string): string => {
    return new Date(date).toLocaleString(undefined, {
      dateStyle: 'long',
    })
  }

  return (
    <div className="overflow-hidden py-18 lg:py-28">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>Un oeil sur</Subheading>
          <Heading as="h3" className="mt-2">
            Nos représentations
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {sortPerformances.map((perf, testimonialIndex) => (
          <TestimonialCard
            key={perf.id}
            bounds={bounds}
            scrollX={scrollX}
            img={perf.img}
            isNew={perf.isNew}
            isVideo={perf.videoAvailable}
            description={perf.description}
            quote={perf.quote}
            video={perf.video}
            date={isoToNiceDisplay(perf.date)}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {perf.name}
          </TestimonialCard>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-center">
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
