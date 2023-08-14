import Hero from './Hero'
import Promotions from './Promotions'
import Carousel from './Carousel'
import Hero2 from './Hero2'
import Subs from './Subs'

const HomePage = () => {
  return (
    <div className='mx-4'>
       <Hero/>
   <Promotions/>
  <Carousel/>
  <Hero2/>
  <Subs/>
    </div>
  )
}

export default HomePage
