import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Mark } from '@/components/logo'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="flex">
          <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] lg:text-9xl/[0.8]">
              LE V DE RIDO
            </h1>
          </div>
          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:justify-center">
            <Mark className="mb-12 h-64" />
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Voici</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Nos projets
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Notre"
          title="Prochaine pièce"
          description="Pour 2025, nous préparons la pièce de François SCHARRE « Paul m’a laissé sa clé ! », en ésperant vous voir nombreux !"
          graphic={
            <div className="h-80 bg-[url(/logo-cluster/cash-register.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Nos"
          title="Tarifs"
          description="Le prix des places est porté à 15€. Pour les moins de 18 ans, et plus de 10 ans, le tarif est de 10€. Les places seront gratuites pour les moins de 10 ans."
          graphic={
            <div className="absolute inset-0 bg-[url(/logo-theatres/theatre.jpeg)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Quelles sont nos"
          title="Moyens de paiement ?"
          description="Les règlements se feront sur place, en espèces, par chèque ou, et c’est la nouveauté de cette année, par carte bancaire."
          graphic={<LogoCluster />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Nos"
          title="Lieux de représentations"
          description="Les représentations auront lieu durant le mois d’Octobre, voire Novembre 2025. Nous vous communiquerons les lieux et les horaires ultérieurement, à l'approche des dates mentionées ci-dessus."
          graphic={<Map />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Comment"
          title="Réservé ?"
          description="Les réservations sont vivement conseillées, elles se font uniquement par téléphone au : 06 01 85 34 16 !"
          graphic={
            <div className="flex size-full items-center justify-center pt-10">
              <Keyboard highlighted={['Zero', 'Six', 'Pick']} />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
