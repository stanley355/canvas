import HomeMobileFourHorsemen from './HomeMobileFourHorsemen'
import HomeMobileHero from './HomeMobileHero'

const HomeMobile = () => {
  return (
    <div className='container mt-12 lg:hidden'>
        <HomeMobileHero />
        <HomeMobileFourHorsemen />
    </div>
  )
}

export default HomeMobile