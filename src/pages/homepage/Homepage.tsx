import Hero from './section hero/Hero'
import AboutUs from './section about us/AboutUs'
import AnyQuestons from './section about us/section any questons/AnyQuestons'
import classes from './Homepage.module.css'
import HowToOrder from './section how to order/HowToOrder'

const Homepage = () => {
  return (
    <div className={classes.main}>
      <Hero />
      <AboutUs />
      <HowToOrder />
      <AnyQuestons />
    </div>
  )
}

export default Homepage
