import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Logo théâtre Marc Baron"
        src="/logo-theatres/logo-marc-baron.png"
        className="h-10 max-sm:mx-auto sm:h-18 lg:h-28"
      />
      <img
        alt="Logo théâtre Daudet"
        src="/logo-theatres/logo-daudet.png"
        className="h-10 max-sm:mx-auto sm:h-18 lg:h-28"
      />
      <img
        alt="Logo salle Tisot"
        src="/logo-theatres/logo-tisot.png"
        className="h-10 max-sm:mx-auto sm:h-18 lg:h-28"
      />
      <img
        alt="Logo théâtre Le Colbert"
        src="/logo-theatres/logo-colbert.png"
        className="h-10 max-sm:mx-auto sm:h-18 lg:h-28"
      />
      <img
        alt="Logo un monde à nous"
        src="/logo-theatres/logo-un-monde-a-nous.png"
        className="h-10 max-sm:mx-auto sm:h-18 lg:h-28"
      />
    </div>
  )
}
