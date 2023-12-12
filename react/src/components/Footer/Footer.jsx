import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../styles/Footer.module.css'
import { CART_PAGE, HOME_PAGE } from '../../constants/routes'


const Footer = () => {
  return (
      <section className={styles.footer}>
        <div className={styles.logo}>
          <Link to={HOME_PAGE}>Home</Link>
        </div>

        <div className={styles.rights}>
          Developed by NickShakh
        </div>

      <div className={styles.socials}>
        My socials
      </div>
      </section>
  )
}

export default Footer