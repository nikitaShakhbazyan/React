import React from 'react'
import styles from '../../styles/Home.module.css'
import banner from '../../img/banner.png'

const Banner = () => (
    <section className={styles.banner}>
        <div className={styles.left}>
        <p className={styles.content}>
             NEW YEAR
             
        </p>
        </div>
        <div className={styles.right} style={{backgroundImage:`url(${banner})`}}>
        <span className={styles.discount}>Save up to 50%</span>
        </div>



    </section>
)

export default Banner