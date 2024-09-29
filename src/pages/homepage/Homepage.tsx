import Hero from './section hero/Hero'
import AboutUs from './section about us/AboutUs'
import AnyQuestons from './section any questons/AnyQuestons'
import classes from './Homepage.module.css'
import HowToOrder from './section how to order/HowToOrder'
import { useRef } from 'react'

const Homepage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const handleScrollOrder = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={classes.main}>
      <Hero handleScrollOrder={handleScrollOrder} />
      <AboutUs />
      <div ref={targetRef}>
        <HowToOrder />
      </div>
      <AnyQuestons />
    </div>
  )
}

export default Homepage
