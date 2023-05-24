import { startTransition, useEffect, useRef, useState } from 'react'

export default function MainSection () {
  const viderRef = useRef<HTMLVideoElement | null>(null)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    if (innerWidth <= 600) {
      startTransition(() => {
        setCurrentPath('/video-mobile.webm')
      })
    } else {
      startTransition(() => {
        setCurrentPath('/video.webm')
      })
    }

    const handleResize = () => {
      if (innerWidth <= 600) {
        startTransition(() => {
          setCurrentPath('/video-mobile.webm')
        })
      } else {
        startTransition(() => {
          setCurrentPath('/video.webm')
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (viderRef.current != null && viderRef.current.src !== currentPath) {
      viderRef.current.src = currentPath
    }
  }, [currentPath])

  return (
    <section
      data-header-color='#fff'
      className='w-screen h-screen bg-black relative overflow-x-hidden text-white landing-section'
    >

      <div
        className='
          pt-24 md:pt-32 text-white relative z-10
          flex flex-col
          items-center
          h-full
          justify-between
          pb-20
        '
      >
        <div className='space-y-4'>
          <h2 className='text-3xl md:text-5xl font-bold'>Experience Tesla</h2>
          <p className='text-sm text-center'>Schedule a Demo Drive Today</p>
        </div>

        <div>
          <button
            className='
              px-16 py-2 border-white border-2 rounded-md
              transition-colors duration-500
              hover:bg-white hover:text-black
            '
          >
            Demo Drive
          </button>
        </div>

      </div>

      <video
        ref={viderRef}
        className='absolute inset-0 h-full w-full object-cover'
        src='/video.webm' autoPlay muted loop
      />
    </section>
  )
}
