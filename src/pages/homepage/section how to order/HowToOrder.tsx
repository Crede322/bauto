import classes from './HowToOrder.module.css'
import checkMark from '../../../assets/img/orderpage/check.svg'
import clockIcon from '../../../assets/img/orderpage/clock.svg'
import parkImg from '../../../assets/img/orderpage/carpark.jpg'

const HowToOrder = () => {
  return (
    <div className={classes.wrapper__howToOrder}>
      <span className={classes.title__main}>Заказать у нас авто</span>
      <div className={classes.ordercard__first}>
        <h3>Заполните форму</h3>
        <form className={classes.ordercard__form}>
          <input type="text" placeholder="Ваше имя" />
          <input
            type="text"
            placeholder="Марка и модель желаемого автомобиля"
          />
          <input type="text" placeholder="Номер телефона" />
          <h4>опционально</h4>
          <input type="text" placeholder="Прочие контактные данные" />
          <button>
            Оставить заявку <img src={checkMark} alt="" />
          </button>
        </form>
      </div>
      <img className={classes.background__park} src={parkImg} alt="car park" />
      <div className={classes.ordercard__second}>
        <h3>Далее</h3>
        <div className={classes.ordercard__next}>
          <div className={classes.ordercard__inner}>
            <h4>
              Мы свяжемся с вами <br />
              Для согласования деталей заказа
            </h4>
            <img src={clockIcon} alt="clock" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToOrder
