import React from 'react'
import code from './assets/code.svg'
import arrow_top from '../../assets/arrow-top.svg'
import styles from './CodeFeature.module.css'

const CodeFeature = () => {
   return (
      <div className={styles.codeFeatureContainer}>
         <div className={styles.codeSection}>
            <div className={styles.codeContent}>
               <img src={code} alt='Code Example' />
            </div>
         </div>
         <div className={styles.featureSection}>
            <h2>
               The language for <br /> building web pages
            </h2>
            <p>
               Go live on a fast, reliable, and hassle-free <br /> hosting
               network that scales with your business <br /> with one click and
               go code!
            </p>
            <button className={styles.tryButton}>
               Try it Yourself{' '}
               <img src={arrow_top} alt='' className={styles.arrow} />
            </button>
         </div>
      </div>
   )
}

export default CodeFeature
