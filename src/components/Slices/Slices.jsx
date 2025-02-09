import React from 'react'
import tutor from './assets/tutor.svg'
import flex from './assets/flex.svg'
import access from './assets/access.svg'
import styles from './Slices.module.css'

const features = [
   {
      title: 'Best Tutors',
      description: 'Bring your design vision to life in clean, semantic HTML5',
      icon: tutor,
   },
   {
      title: 'Flexible',
      description: 'Connect your marketing tools with built-in integrations',
      icon: flex,
   },
   {
      title: 'Easy Access',
      description: 'Connect your marketing tools with built-in integrations',
      icon: access,
   },
]

const Slices = () => {
   return (
      <div className={styles.sliceContainer}>
         <div className={styles.sliceHeader}>
            <h2>
               Our Features <br /> Special For You
            </h2>
            <p>
               We provide various special features <br /> for all of you
            </p>
            <div className={styles.sliceIndicator}>
               <span
                  className={`${styles.indicator} ${styles.indicatorActive}`}
               ></span>
               <span className={styles.indicator}></span>
               <span className={styles.indicator}></span>
            </div>
         </div>
         <div className={styles.sliceFeatures}>
            {features.map((feature, index) => (
               <div
                  key={index}
                  className={`${styles.sliceCard} ${
                     index === 1 ? styles.sliceCardHighlight : ''
                  }`}
               >
                  <img src={feature.icon} alt='' width={80} height={80} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Slices
