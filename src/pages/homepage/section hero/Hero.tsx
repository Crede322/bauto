import heroImg from '../../../assets/img/mainpage/newauto.png'
import contactIcon from '../../../assets/img/mainpage/contactIcon.svg'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <div className={classes.wrapper__hero}>
      <div className={classes.container}>
        <h1>
          Авто из-за рубежа
          <br />
          быстро, безопасно
          <br />и полностью под ключ!
        </h1>
        <img className={classes.image__hero} src={heroImg} alt="hero" />
        <div className={classes.hero__content}>
          <button className={classes.button__hero}>
            <img src={contactIcon} alt="contact" />
            <h2>Связаться с нами</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
