import classes from './AnyQuestons.module.css'
import whatsapp from '../../../assets/img/anyquestonspage/whatsapp.svg'
import telegram from '../../../assets/img/anyquestonspage/telegram.svg'

const AnyQuestons = () => {
  return (
    <div className={classes.wrapper__anyquestons}>
      <div className={classes.title}>
        <span className={classes.title__main}>Ещё остались вопросы?</span>
        <h2>Мы на них ответим</h2>
        <div className={classes.row}>
          <button className={classes.button__social}>
            <img src={telegram} alt="telegram icon" />
          </button>
          <button className={classes.button__social}>
            <img src={whatsapp} alt="whatsapp icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnyQuestons
