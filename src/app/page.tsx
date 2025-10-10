import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Mark } from '@/components/logo'
import { LogoCloud } from '@/components/logo-cloud'
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
          description="Avec un beau succès le 4 Octobre au Centre Culturel Tisot à la Seyne Sur Mer, nous continuons nos représentations pour nos amis de Garéoult. Pour la première fois, nous serons à la salle communale le Dimanche 26 Octobre 2025 à 15h00 pour présenter 'Paul m'a laissé sa clé'. Le spectacle est gratuit, alors n'hésitez pas ! Venez découvrir la troupe LE V DE RIDO !!"
          graphic={
            <div className="h-80 bg-[url(/posters/paul-ma-laisser-ça-cle2.jpg)] bg-[size:100%_650px] bg-cover bg-[left_0px_top_-10px] bg-no-repeat sm:bg-[left_0px_top_-40px]" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Nos"
          title="Tarifs"
          description=" Les places sont à 15€ et pour les moins de 10 ans, elles sont gratuites. Pour les plus de 10 ans et moins de 18 ans, elles sont à 10€."
          graphic={
            <div className="absolute inset-0 bg-[url(/theatre.jpeg)] bg-[size:100%_650px] bg-cover bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Nos"
          title="Lieux de représentations"
          description="Les représentations auront lieu durant le mois d’Octobre, voire Novembre 2025. Nous vous communiquerons les lieux et les horaires dans la section : 'Notre prochaine pièce'."
          graphic={<Map />}
          className="lg:col-span-3 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Comment"
          title="Réserver"
          description="Les réservations sont vivement conseillées. Elles se font uniquement par sms au 06 01 85 34 16 ou dans la rubrique ''Contact''."
          graphic={
            <div className="flex size-full items-center justify-center pt-10">
              <Keyboard highlighted={['Zero', 'Six', 'Pick']} />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-3 lg:rounded-br-4xl"
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
        <Container className="mt-16">
          <LogoCloud />
        </Container>
        <div className="bg-[#FEF7FB] py-18 lg:py-32">
          <BentoSection />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
