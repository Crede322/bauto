import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.wrapper__header}>
      <div className={classes.header__row}>
        <div className={classes.logo}>
          <h2>B-Auto</h2>
        </div>
        <div className={classes.number}>
          <a href="tel:+77470553725">+7 747 055 3725</a>
        </div>
      </div>
    </div>
  )
}

export default Header
