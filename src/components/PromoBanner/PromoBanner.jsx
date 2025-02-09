import React from 'react'
import styles from './PromoBanner.module.css'
import arrow_top from '../../assets/arrow-top.svg'

const PromoBanner = () => {
   return (
      <div className={styles.promoBanner}>
         <h2>
            Start upgrading your <br /> skills free for this month
         </h2>
         <p>Build your site for free and take as long as you need</p>
         <div className={styles.promoButtons}>
            <button className={`${styles.btn} ${styles.tryYourself}`}>
               Try Yourself
            </button>
            <button className={`${styles.btn} ${styles.getStarted}`}>
               Get started <img src={arrow_top} alt='' />
            </button>
         </div>
      </div>
   )
}

export default PromoBanner
