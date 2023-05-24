import { useEffect } from 'react'
import useDrawer from '../hooks/useDrawer'
import { DrawerContextType } from '../context/drawer'
import { drawerList } from '../constants'

export default function DrawerUI () {
  const { show, close } = useDrawer() as DrawerContextType

  const className = 'w-[310px] bg-white h-full top-0 right-0 fixed drawer '

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const el = e.target as HTMLElement

      if (el.getAttribute('aria-modal') != null) {
        close()
      }
    })
  }, [close])

  return (
    <div
      className={
        `transition-all duration-[300ms] ease-in-out  fixed h-screen w-full bg-black/40 z-50 inset-0 backdrop-blur-sm visible ${show ? 'visible backdrop-blur-sm' : 'invisible backdrop-blur-none'}`
      }
      aria-modal
    >
      <div className={`${className} ${show ? 'active' : ''}`}>
        <nav className='h-full'>
          <div className='flex justify-end w-full px-10 py-6'>
            <button onClick={close} className='text-xl text-black/40'>✖</button>
          </div>
          <ul className='flex flex-col px-8 gap-4 overflow-y-auto h-[90%] drawer__list pb-16'>

            {
              drawerList.map(item => (
                <li key={item}>
                  <a href='#' className='block p-2 hover:bg-black/10 transition-colors duration-300'>{item}</a>
                </li>
              ))
            }

          </ul>
        </nav>

      </div>
    </div>
  )
}
