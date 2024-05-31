import HomeMobileFourHorsemen from './HomeMobileFourHorsemen'
import HomeMobileHero from './HomeMobileHero'
import HomeMobileStudent from './HomeMobileStudent'

const HomeMobile = () => {
  return (
    <div className='container mt-12 lg:hidden'>
        <HomeMobileHero />
        <HomeMobileFourHorsemen />
        <HomeMobileStudent />
    </div>
  )
}

export default HomeMobile