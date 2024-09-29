import classes from './AboutUs.module.css'
import iconAbout from '../../../assets/img/about us page/about.svg'
import iconWork from '../../../assets/img/about us page/work.svg'
import iconService from '../../../assets/img/about us page/service.svg'
import iconApproach from '../../../assets/img/about us page/approach.svg'
import iconFavorite from '../../../assets/img/about us page/favorite.svg'

const AboutUs = () => {
  return (
    <div className={classes.wrapper__AboutUs}>
      <div className={classes.row__cards_first}>
        <div className={`${classes.card} ${classes.card__aboutus}`}>
          <div className={classes.card__title}>
            <img src={iconAbout} alt="card icon" />
            <span>О нас</span>
          </div>
          <h2>
            Мы принимаем заявки на поиск автомобилей
            <br />и доставляем их в Казахстан из следующих стран:
          </h2>
          <div className={classes.regionbox}>
            <h1>Корея</h1>
            <h1>Китай</h1>
            <h1>Грузия</h1>
          </div>
        </div>
        <div className={`${classes.card} ${classes.card__work}`}>
          <div className={classes.card__title}>
            <img src={iconWork} alt="card icon" />
            <span>Как мы работаем?</span>
          </div>
          <h2>
            1 Принимаем заказ.
            <br />2 Составляем договор с полной документацией.
            <br />
            3 Осуществляем поиск с фото и видео отчётом.
            <br />4 Обслуживаем авто и доставляем до вас.
          </h2>
        </div>
      </div>
      <div className={classes.row__cards_second}>
        <div className={`${classes.card} ${classes.card__service}`}>
          <div className={classes.card__title}>
            <img src={iconService} alt="card icon" />
            <span>Сервис под ключ</span>
          </div>
          <h2>
            По прибытии автомобиль проходит тех. осмотр,
            <br />
            мы оформляем его на вас и проводим чистку.
            <br />
            Все эти услуги предоставляются за наш счёт.
          </h2>
        </div>
        <div className={`${classes.card} ${classes.card__approach}`}>
          <div className={classes.card__title}>
            <img src={iconApproach} alt="card icon" />
            <span>
              Индивидуальный
              <br />
              подход
            </span>
          </div>
          <h2>
            Для нас важен каждый клиент и мы учитываем
            <br />
            ваши уникальные пожелания и требования,
            <br />
            чтобы предложить идеальные решения.
          </h2>
        </div>
      </div>
      <div className={classes.row__cards_third}>
        <div className={`${classes.card} ${classes.card__advantages}`}>
          <div className={classes.card__title}>
            <img src={iconFavorite} alt="card icon" />
            <span>Наши преимущества</span>
          </div>
          <div className={classes.advantages__row}>
            <div>
              <h1>Широкий круг поиска:</h1>
              <h2>
                Благодаря интернациональности
                <br />и экспертизе в международных рынках
                <br />
                мы предоставляем вам обширный выбор.
              </h2>
              <h1>Гарантия качества:</h1>
              <h2>Тщательный технический осмотр авто.</h2>
            </div>
            <div>
              <h1>
                Прозрачность
                <br />и юридическая безопасность:
              </h1>
              <h2>
                Оформление авто на владельца
                <br /> осуществляется по всем стандартам.
              </h2>
              <h1>Экономия времени и сил:</h1>
              <h2>Берем на себя всю бюрократию.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
