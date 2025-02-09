import React from 'react'
import styles from './Introduce.module.css'
import code from './assets/code.svg'
import desc from '../../assets/desc.svg'
import arrow_top from '../../assets/arrow-top.svg'
import card_code from '../../assets/card-code.svg'
import retangle from '../../assets/retangle.svg'
import Header from '../Header/Header'

const Introduce = () => {
   return (
      <div className={styles.introduce}>
         <div className={`${styles.introduceChild} ${styles.introduceLeft}`}>
            <Header />
            <div className={styles.introduceTitle}>
               <p>Improve your</p>
               <div className={styles.titleImg}>
                  <p>skills by</p>
                  <img src={code} alt='Code Icon' />
                  <p>study</p>
               </div>
               <p>with coding</p>
            </div>

            <div className={styles.introduceDesc}>
               <img src={desc} alt='Description Icon' />
               <div className={styles.descText}>
                  <p>Create, launch, and iterate on new</p>
                  <p>marketing campaigns without</p>
                  <p>distracting your product team.</p>
               </div>
            </div>

            <button className={styles.introduceButton}>
               Get started <img src={arrow_top} alt='Arrow Icon' />
            </button>
         </div>
         <div className={`${styles.introduceChild} ${styles.introduceRight}`}>
            <img
               className={styles.rightImage}
               src={card_code}
               alt='Card Code'
            />
            <img
               className={styles.rightImageRetangle}
               src={retangle}
               alt='Rectangle'
            />
         </div>
      </div>
   )
}

export default Introduce
