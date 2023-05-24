interface Props {
  title: string
  link: string
  imageSrc: string
  mobileSrc: string
  secondBottomText?: string
}

export default function LandingSection ({ title, link, imageSrc, mobileSrc, secondBottomText = 'Demo Drive' }: Props) {
  return (
    <section
      className='w-screen h-screen bg-black relative overflow-x-hidden text-white landing-section'
      data-header-color='#000'
    >

      <div
        className='
          pt-24 md:pt-8 lg:pt-32 text-black relative z-10
          flex flex-col
          items-center
          h-full
          justify-between
          pb-24
        '
      >
        <div className='space-y-4'>
          <h2 className='text-3xl text-center lg:text-5xl font-bold'>{title}</h2>
          <a href='#' className='text-sm text-center block underline'>{link}</a>
        </div>

        <div className='flex gap-4 flex-col md:flex-row'>
          <button
            className='
              text-sm
              bg-neutral-800 text-white
              px-16 py-2 rounded-md
            '
          >
            Order Now
          </button>

          <button
            className='
              text-sm
              bg-white text-black
              px-16 py-2 rounded-md
            '
          >
            {secondBottomText}
          </button>

        </div>

      </div>

      <picture>
        <source srcSet={imageSrc} media='(min-width:600px)' className='absolute inset-0 h-full w-full object-cover' />
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src={mobileSrc} alt={title}
        />
      </picture>

    </section>
  )
}
