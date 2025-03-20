import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-gray-950 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800',
  ),
  secondary: clsx(
    'mt-2 -mb-4 cursor-pointer rounded-sm bg-white from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] px-2.5 py-1.5 text-sm font-semibold hover:bg-linear-115',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
