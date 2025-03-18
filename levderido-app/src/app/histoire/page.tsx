import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Histoire',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}
function Testimonial() {
  return (
    <div className="mx-2 my-24 mt-40 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Thanks to Radiant, we&apos;re finding new leads that we never
                  would have found with legal methods.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">
                  Nathalie Vandermoeten
                </p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    Fondatrice, LE V DE RIDO
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">En savoir plus sur</Subheading>
        <Heading as="div" className="mt-2 text-center">
          Notre histoire
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              Quand est ce que j&apos;ai decouvert le théâtre ?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              J’ai découvert le théâtre en 2001 en intégrant la troupe de
              théâtre « A quoi on joue » du village d’Heyrieux dans l’Isère.
              S’en est suivi 7 années de rigolade, de représentations, de
              répétitions, de rôles toujours différents et dans une ambiance de
              bienveillance et de franche camaraderie.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Qu&apos;est ce que je recherchais ?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              De retour dans ma ville d’origine, La Seyne Sur mer, en 2008 j’ai
              recherché ce que j’avais quitté. J’ai intégré différentes
              compagnies de théâtre mais sans jamais trouvé ce qui m’animait,
              l’esprit de cohésion à travers le théâtre. C’est là que la
              création de ma troupe avec mes valeurs, bienveillance et pas de
              jugement, a germé dans mon esprit.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              LE V DE RIDO dans tout sa ?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              L’histoire du LE V DE RIDO commence sur un coin de table un jour
              de Novembre 2013, par la création de l’association et de la
              troupe. C’est un article paru dans Le Seynois qui fera venir à moi
              plein de personnes de tout horizon et de tout âge. Les deux
              premières pièces « L’arbre à came » en 2014 et « Par la lorgnette
              » en 2015 ont connu un joli succès et ont permis de nous faire
              connaître. Mais des évènements de vie m’ont obligé à mettre
              l’association en sommeil…durant cinq ans. C’est en 2020, qu’une
              autre troupe est venue me chercher pour la mise en scène de leur
              pièce « C’est pas si facile »…et le Covid est passé par là ! Nous
              rebondissons en 2021 en reprenant « C’est pas si facile » sous
              l’égide du LE V DE RIDO et l’arrivée de nouveaux comédiens. La
              pièce sera jouée en 2022 avec le succès que l’on connaît mais
              aussi la disparition d’un ami, l’un des créateurs de la pièce. En
              2023, j’ai l’immense surprise de voir arriver une dizaine de
              comédiens qui veulent tous jouer sous ma direction. La création de
              monter deux pièces sera prise et nous préparerons « Double Axel-le
              », avec les anciens et « Sale attente » avec les nouveaux. Les
              représentations ont lieu sous forme de mini-festival : une pièce
              le vendredi et une autre le samedi. Le public a été au rendez-vous
              et nous avons pris un immense plaisir à jouer ces pièces sur trois
              week-end. Sur cette lancée, en 2024, nous repartons sur deux
              pièces. D’autres comédiens nous rejoignent et « Le coupable est
              dans la salle » et « Soirée pyjama » voient le jour. Très beau
              succès pour ces deux pièces et « Soirée pyjama » a même été
              sélectionné par le Rotary-club de La Seyne Sur Mer/Saint Mandrier
              pour être jouer en faveur des enfants de Mayotte en Février 2025.
              Cette année, il n’y aura qu’une pièce…enfin pour le moment et ce
              sera « Paul m’a laissé sa clé ! »
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}
function TheCompany() {
  return (
    <Container className="mt-16 mb-32">
      <Heading as="h1">La compagnie</Heading>
      <Lead className="mt-6 max-w-3xl">
        We’re on a mission to transform revenue organizations by harnessing vast
        amounts of illegally acquired customer data.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At Radiant, we are dedicated to transforming the way revenue
            organizations source and close deals. Our mission is to provide our
            customers with an unfair advantage over both their competitors and
            potential customers through insight and analysis. We’ll stop at
            nothing to get you the data you need to close a deal.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We’re customer-obsessed — putting the time in to build a detailed
            financial picture of every one of our customers so that we know more
            about your business than you do. We are in this together, mostly
            because we are all implicated in large-scale financial crime. In our
            history as a company, we’ve never lost a customer, because if any
            one of us talks, we all go down.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:mx-2 lg:mt-8 xl:mr-auto">
          <div className="-mx-8 mx-2 grid grid-cols-2 gap-4 md:mx-0 md:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>les chiffres</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Pièces</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={100} end={150} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Représentations</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={15} end={30} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Spectateurs</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0.9} end={1.5} decimals={1} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">
                Années d&apos;activités
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={150} end={200} />M
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export default function History() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Testimonial />
      <FrequentlyAskedQuestions />
      <TheCompany />
      <Footer />
    </main>
  )
}
