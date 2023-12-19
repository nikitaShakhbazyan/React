import React from 'react'
import { Link } from 'react-router-dom'
import { CART_PAGE, HOME_PAGE } from '../../constants/routes'
import styles from '../../styles/Header.module.css'
import Logo from '../../img/Logo.png'
import Avatar from '../../img/Logo.png'

const Header = React.memo(() => {
      
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={HOME_PAGE}>
                <img src={Logo} alt="" />
            </Link>
        </div>

        <div className={styles.info}>
            <div className={styles.user}>
                    <div className={styles.info} style={{backgroundImage:`url(${Avatar})`}}></div>
                    <div className={styles.username}>Guest</div>

            </div>
            <form className={styles.form}>
            <div className={styles.icon}></div>
            {/* <div className={styles.input}>
            </div> */}
            {false && <div className={styles.box}></div>}
            </form>
            <div className={styles.account}></div>
            <Link className={styles.link} to={HOME_PAGE}>Home</Link>
            <Link className={styles.link} to={CART_PAGE}>Cart</Link>
            <span className={styles.count}>2</span>
        </div>
    </div>
  )
})

export default Header