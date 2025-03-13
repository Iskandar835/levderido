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
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5c1.96 0 2.2.008 2.97.043.72.033 1.11.153 1.37.255.34.13.58.287.83.537.25.25.407.49.537.83.102.26.222.65.255 1.37.035.77.043 1.01.043 2.97s-.008 2.2-.043 2.97c-.033.72-.153 1.11-.255 1.37-.13.34-.287.58-.537.83-.25.25-.49.407-.83.537-.26.102-.65.222-1.37.255-.77.035-1.01.043-2.97.043s-2.2-.008-2.97-.043c-.72-.033-1.11-.153-1.37-.255-.34-.13-.58-.287-.83-.537-.25-.25-.407-.49-.537-.83-.102-.26-.222-.65-.255-1.37C2.508 10.2 2.5 9.96 2.5 8s.008-2.2.043-2.97c.033-.72.153-1.11.255-1.37.13-.34.287-.58.537-.83.25-.25.49-.407.83-.537.26-.102.65-.222 1.37-.255C5.8 2.508 6.04 2.5 8 2.5zm0-2.5C6.02 0 5.76.008 4.99.043 4.21.08 3.64.205 3.19.38c-.49.182-.9.407-1.31.817C1.47 1.61 1.245 2.02 1.063 2.51.888 2.96.763 3.53.727 4.31.692 5.08.684 5.34.684 8s.008 2.92.043 3.69c.036.78.161 1.35.336 1.8.182.49.407.9.817 1.31.41.41.82.635 1.31.817.45.175 1.02.3 1.8.336C5.76 15.992 6.02 16 8 16s2.24-.008 3.01-.043c.78-.036 1.35-.161 1.8-.336.49-.182.9-.407 1.31-.817.41-.41.635-.82.817-1.31.175-.45.3-1.02.336-1.8.035-.77.043-1.03.043-3.69s-.008-2.92-.043-3.69c-.036-.78-.161-1.35-.336-1.8-.182-.49-.407-.9-.817-1.31-.41-.41-.82-.635-1.31-.817-.45-.175-1.02-.3-1.8-.336C10.24.008 9.98 0 8 0zM8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.85-5.86a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0z"
      />
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
          className="font-medium"
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
