import AccessorieSection from './components/AccessorieSection'
import DrawerUI from './components/DrawerUI'
import HeaderLanding from './components/HeaderLanding'
import LandingSection from './components/LandingSection'
import MainSection from './components/MainSection'

function App () {
  return (
    <>
      <HeaderLanding />
      <main className='overflow-x-hidden scroll-smooth snap-y snap-mandatory relative h-screen'>
        <div className='snap-center'>
          <MainSection />
        </div>
        <div className='snap-center'>
          <LandingSection
            title='Model 3'
            imageSrc='/model-3.avif'
            link='Lease from $399/mo'
            mobileSrc='/model-3-mobile.avif'
          />
        </div>
        <div className='snap-center'>
          <LandingSection
            title='Model Y'
            imageSrc='/model-y.avif'
            link='Lease from $399/mo'
            mobileSrc='/model-y-mobile.avif'
          />
        </div>
        <div className='snap-center'>
          <LandingSection
            title='Model S'
            imageSrc='/model-s.avif'
            link='Lease from $399/mo'
            mobileSrc='/model-s-mobile.avif'
          />
        </div>
        <div className='snap-center'>
          <LandingSection
            title='Model X'
            imageSrc='/model-x.avif'
            link='Lease from $399/mo'
            mobileSrc='/model-x-mobile.avif'
          />
        </div>
        <div className='snap-center'>
          <LandingSection
            title='Solar Panels'
            imageSrc='/solar-panel.avif'
            link='Lowest Cost Solar Panels in America'
            mobileSrc='/solar-panel-mobile.avif'
            secondBottomText='Learn More'
          />
        </div>
        <div className='snap-center'>
          <LandingSection
            title='Solar Roof'
            imageSrc='/solar-roof.avif'
            link='Produce Clean Energy From Your Roof'
            mobileSrc='/solar-roof-mobile.avif'
            secondBottomText='Learn More'
          />
        </div>
        <div className='snap-center'>
          <AccessorieSection />
        </div>
      </main>
      <DrawerUI />
    </>
  )
}

export default App
