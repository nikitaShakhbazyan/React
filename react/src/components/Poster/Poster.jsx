import React from 'react'
import styles from '../../styles/Home.module.css'
import BG from '../../img/BN.png'
import { Link } from 'react-router-dom'

const Poster = () => {
  return (
    <section className={styles.home}>
            <h1 className={styles.h1News}>NEWS ON WEBSITE!</h1>
            <Link className={styles.cryptoLink} to={'./crypto'}> Crypto Prices </Link>
        <div className={styles.title}>Big Sale 20%</div>
        <div className={styles.product}>
        <div className={styles.text}>
            <div className={styles.subtitle}>The Bestseller 2023</div>
            <h1 className={styles.head}>Only Today</h1>
            <button className={styles.button}>Shop Now</button>
        </div>
            <div className={styles.image}>
                <img src={BG} alt="Image1" />
            </div>
        </div>
    </section>
  )
}

export default Poster