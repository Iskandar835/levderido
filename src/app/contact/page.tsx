import { Form } from '@/components/form'
import { GradientBackground } from '@/components/gradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Voici tous les moyens de nous contacter',
}

export default function Contact() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <Form />
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            Nous vous répondrons dans les plus{' '}
            <span className="font-semibold">brefs délais.</span>
          </div>
        </div>
      </div>
    </main>
  )
}
