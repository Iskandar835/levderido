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
                    src=""
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
      <Heading as="h1">La troupe</Heading>
      <Lead className="mt-6 max-w-3xl">
        Parce que rire est essentiel, sans jugement et avec bienveillance
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Infos</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            La troupe LE V DE RIDO a été crée en même temps que l’association,
            c’est-à-dire en 2013. Depuis plus de 33 comédiens s’y sont succédés.
            Actuellement la troupe compte 9 membres qui ont tous un rôle dans la
            pièce en préparation. Les ateliers théâtre ont été mis en place
            cette année, en 2025. Ils permettent aux participants de se
            familiariser avec les rudiments du théâtre et offrent à la metteur
            en scène l’opportunité de découvrir le potentiel de chacun, et
            pourquoi pas, de leur attribuer un rôle l’année prochaine.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            La troupe LE V DE RIDO se produit toujours en fin d’année, en
            Octobre ou Novembre. Les pièces sont choisies en Janvier et les
            rôles distribués dans la foulée. La préparation de la pièce débute
            aussitôt, avec l’ébauche des décors, la recherche des accessoires et
            le choix des costumes.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:mx-2 lg:mt-8 xl:mr-auto">
          <div className="-mx-8 mx-2 grid grid-cols-2 gap-4 md:mx-0 md:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img alt="" src="" className="block size-full object-cover" />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img alt="" src="" className="block size-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img alt="" src="" className="block size-full object-cover" />
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
              <dt className="text-sm/6 text-gray-600">Pièces jouées</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={7} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Représentations</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={18} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Spectateurs</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                +<AnimatedNumber start={1800} end={2000} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">
                Années d&apos;activités
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={12} />
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
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
