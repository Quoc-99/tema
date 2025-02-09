import React from 'react'
import styles from './TutorShowcase.module.css'
import tutor from './assets/tutor.svg'
import university from './assets/university.svg'
import showcase from './assets/showcase.svg'

const TutorShowcase = () => {
   return (
      <div className={styles.tutorShowcaseContainer}>
         <div className={styles.textSection}>
            <h2>
               Get up and running <br /> fast together
            </h2>
            <div className={styles.features}>
               <div className={`${styles.feature} ${styles.featureLeft}`}>
                  <img src={university} alt='' width={44} />
                  <h3>University</h3>
                  <p>
                     Browse hundreds of in-depth <br /> videos, courses, and
                     guides <br /> to get up and running fast.
                  </p>
               </div>
               <div className={`${styles.feature} ${styles.featureRight}`}>
                  <img src={showcase} alt='' width={32} />
                  <h3>Showcase</h3>
                  <p>
                     Get inspired by the <br /> incredible websites built by{' '}
                     <br /> members of the community.
                  </p>
               </div>
            </div>
         </div>
         <img src={tutor} className={styles.image} alt='' width={521} />
      </div>
   )
}

export default TutorShowcase
