import { useEffect } from 'react'
import { Tesla } from './Icons'
import useDrawer from '../hooks/useDrawer'
import { DrawerContextType } from '../context/drawer'

export default function HeaderLanding () {
  const { open } = useDrawer() as DrawerContextType

  useEffect(() => {
    const $backdrop = document.querySelector('#backdrop') as HTMLElement
    const $listItems = document.querySelectorAll('ul li')

    const handleMouseEnter = (e: Event) => {
      const item = e.target as HTMLElement
      const { left, top, width, height } = item.getBoundingClientRect()
      $backdrop.style.setProperty('--left', `${left}px`)
      $backdrop.style.setProperty('--top', `${top}px`)
      $backdrop.style.setProperty('--width', `${width}px`)
      $backdrop.style.setProperty('--height', `${height}px`)
      $backdrop.style.opacity = '1'
    }
    const handleMouseLeave = () => {
      $backdrop.style.opacity = '0'
    }

    $listItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      $listItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const $header = document.querySelector('#landing-header') as HTMLElement

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry

        if (isIntersecting) {
          const color = entry.target.getAttribute('data-header-color') as string
          $header.style.color = color
        }
      })
    }, options)

    const sectionElements = document.querySelectorAll('.landing-section')
    sectionElements.forEach((section) => observer.observe(section))

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <header
      className='
        fixed w-full px-4 md:px-8 py-4
        flex items-center
        justify-between z-40
        transition-colors duration-300
      '
      id='landing-header'
    >
      <div className='flex-grow'>
        <Tesla className='w-[120px] h-5' />
      </div>
      <div className='lg:hidden'>
        <button onClick={open} className='bg-black/5 backdrop-blur-lg py-2 px-3 text-sm rounded-sm'>Menu</button>
      </div>
      <ul className='hidden lg:flex [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:inline-block text-sm'>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Solar Roof</a></li>
        <li><a href='#'>Solar Panels</a></li>
        <li><a href='#'>Powerwall</a></li>
      </ul>

      <ul className='hidden lg:flex justify-end flex-grow [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:inline-block text-sm'>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Account</a></li>
        <li><a href='#'>Menu</a></li>
      </ul>

      <div
        id='backdrop'
        className='
          bg-black/10 backdrop-blur-lg -z-10 rounded absolute right-0
          translate-x-[var(--left)]
          translate-y-[var(--top)]
          w-[var(--width)]
          h-[var(--height)]
          inset-0 opacity-0
          transition-all duration-300 ease-in-out
        '
      />

    </header>
  )
}
