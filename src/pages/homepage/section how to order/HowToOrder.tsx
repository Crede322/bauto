import { useState } from 'react'
import classes from './HowToOrder.module.css'
import checkMark from '../../../assets/img/orderpage/check.svg'
import clockIcon from '../../../assets/img/orderpage/clock.svg'
import parkImg from '../../../assets/img/orderpage/carpark.jpg'

const HowToOrder = () => {
  const [name, setName] = useState('')
  const [car, setCar] = useState('')
  const [phone, setPhone] = useState('')
  const [otherContacts, setOtherContacts] = useState('')
  const [formSent, setFormSent] = useState('')
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN

  const sendTelegramMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name !== '' && car !== '' && phone !== '') {
      console.log('форма отправлена')
      setFormSent('Заявка отправлена')

      const message = `Новая заявка -\nИмя: ${name}\nАвто: ${car}\nНомер телефона: ${phone}\nПрочие контактные данные: ${otherContacts}`

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: 1232684234,
              text: message
            })
          }
        )

        if (response.ok) {
          console.log('Message sent successfully')
          setName('')
          setCar('')
          setPhone('')
          setOtherContacts('')
        } else {
          console.error('Error sending message', response)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  return (
    <div className={classes.wrapper__howToOrder}>
      <span className={classes.title__main}>Оформить заказ</span>
      <div className={classes.ordercard__first}>
        <h3>Заполните форму</h3>
        <form
          className={classes.ordercard__form}
          onSubmit={sendTelegramMessage}
        >
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Марка и модель желаемого авто"
            value={car}
            onChange={(e) => setCar(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <h4>опционально</h4>
          <input
            type="text"
            placeholder="Прочие контактные данные"
            value={otherContacts}
            onChange={(e) => setOtherContacts(e.target.value)}
          />
          <h5>{formSent}</h5>
          <button type="submit">
            Оставить заявку <img src={checkMark} alt="checkmark" />
          </button>
        </form>
      </div>
      <img className={classes.background__park} src={parkImg} alt="car park" />
      <div className={classes.ordercard__second}>
        <div className={classes.ordercard__second_wrapper}>
          <h3>Далее</h3>
          <div className={classes.ordercard__next}>
            <div className={classes.ordercard__inner}>
              <h4>
                Мы свяжемся с вами <br />
                для согласования
                <br />
                деталей заказа
              </h4>
              <img src={clockIcon} alt="clock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToOrder
