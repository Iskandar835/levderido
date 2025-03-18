'use client'

import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import emailjs from '@emailjs/browser'
import { Field, Input, Label, Textarea } from '@headlessui/react'
import { clsx } from 'clsx'
import { useRef } from 'react'

export function Form() {
  const form = useRef<HTMLFormElement | null>(null)

  const emailJsParams = {
    serviceId: 'service_igy85ub',
    templateId: 'template_drc0ydf',
    publickKey: 'HmPc-cC_4kLNrsYUI',
  }

  const sendFormToEmailJS = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    try {
      await emailjs.sendForm(
        emailJsParams.serviceId,
        emailJsParams.templateId,
        form.current,
        {
          publicKey: emailJsParams.publickKey,
        },
      )
      alert('sa work')
      form.current.reset()
    } catch (error) {
      console.error('The form parameters could not be sent :', error)
    }
  }

  return (
    <form ref={form} onSubmit={sendFormToEmailJS} className="p-7 sm:p-11">
      <div className="flex items-start">
        <Link href="/" title="Home">
          <Mark className="h-9 fill-black" />
        </Link>
      </div>
      <h1 className="mt-8 text-base/6 font-medium">
        Vous souhaitez nous contacter ?
      </h1>
      <p className="mt-1 text-sm/5 text-gray-600">Envoyez nous un message !</p>
      <Field className="mt-8 space-y-3">
        <Label className="text-sm/5 font-medium">Votre nom</Label>
        <Input
          required
          autoFocus
          type="text"
          name="user_name"
          className={clsx(
            'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
            'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
            'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
          )}
        />
      </Field>
      <Field className="mt-8 space-y-3">
        <Label className="text-sm/5 font-medium">Votre email</Label>
        <Input
          required
          autoFocus
          type="email"
          name="user_email"
          className={clsx(
            'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
            'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
            'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
          )}
        />
      </Field>
      <Field className="mt-8 space-y-3">
        <Label className="text-sm/5 font-medium">Votre message</Label>
        <Textarea
          required
          name="message"
          className={clsx(
            'block h-48 w-full resize-none rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
            'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
            'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
          )}
        />
      </Field>

      <div className="mt-8">
        <Button type="submit" value="Send" className="w-full">
          Envoyer
        </Button>
      </div>
    </form>
  )
}
