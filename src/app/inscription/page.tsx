import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inscription',
  description:
    'Venez apprendre les rudiments du théâtre dans la bonne humeur et sans jugement !',
}

const tiers = [
  {
    name: 'Adolescents' as const,
    slug: 'adolescents',
    description: 'Les ateliers des ados',
    priceMonthly: 20,
    href: 'mailto:le.v.de.rido@gmail.com',
    highlights: [
      { description: 'Pour les plus jeunes, de 12 à 17 ans' },
      { description: 'Tous les mercredis de 17h00 à 18h30' },
      { description: 'Maison Intergénérationnelle Saint-Georges' },
      { description: 'ZAC Saint-Georges - 83500 LA SEYNE SUR MER' },
    ],
  },
  {
    name: 'Adultes' as const,
    slug: 'adultes',
    description: 'Les ateliers des adultes',
    priceMonthly: 20,
    href: 'mailto:le.v.de.rido@gmail.com',
    highlights: [
      { description: 'À partir de 18 ans' },
      { description: 'Tous les mercredis de 19h00 à 21h00' },
      { description: 'Maison Intergénérationnelle Saint-Georges' },
      { description: 'ZAC Saint-Georges - 83500 LA SEYNE SUR MER' },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16 lg:mt-24">
      <Heading as="h1">Nous rejoindre</Heading>
      <Lead className="mt-6 max-w-3xl">
        Venez apprendre les rudiments du théâtre dans la bonne humeur et sans
        jugement ! <br /> Les ateliers sont animés par Nathalie VANDERMOETEN,
        metteur en scène de la troupe LE V DE RIDO. <br />
        <span className="italic">La séance découverte est offerte !</span>
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative mb-16 py-24 lg:mb-32">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              €{tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p className="font-bold">PAR MOIS</p>
              <p>+ Adhésion annuelle de 10€ par an</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>S&apos;inscrire</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Cette formule propose:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ description }: { description: string }) {
  return (
    <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25">
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

export default function Registration() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Footer />
    </main>
  )
}
