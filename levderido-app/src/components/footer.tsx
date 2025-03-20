import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-14">
      <hgroup>
        <Subheading>en savoir plus ?</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Vous voulez rejoindre l&apos;aventure,
          <br />
          avoir plus d&apos;informations ?
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        Vous pouvez nous suivre sur les réseaux sociaux ou nous contacter par
        e-mail ou téléphone.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="/contact">
          Nous contacter
        </Button>
      </div>
    </div>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 4.02 2.926 7.346 6.75 7.95v-5.624H4.718V8H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257V8H11l-.355 2.326H9.25V16C13.074 15.396 16 12.066 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  )
}

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.facebook.com/share/16CVJQHKXP/"
        target="_blank"
        aria-label="Rejoignez nous sur Facebook"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconFacebook className="size-6" />
      </Link>
      <Link
        href="https://www.instagram.com/le.v.de.rido?igsh=MXdla2xicmRubm5hMA=="
        target="_blank"
        aria-label="Rejoignez nous sur Instagram"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconInstagram className="size-6" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="sm:flex sm:gap-4">
      <div className="text-sm/6 text-gray-950">
        &copy; {new Date().getFullYear()} LE V DE RIDO Inc.
      </div>
      <div className="text-sm/6 text-gray-950">
        Development :{' '}
        <Link
          href="https://www.madebysancho.com"
          target="_blank"
          className="from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text font-semibold hover:bg-linear-to-l hover:text-transparent"
        >
          SANCHO
        </Link>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-8 lg:pb-12">
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-6 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
