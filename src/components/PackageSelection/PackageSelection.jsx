import React from 'react'
import styles from './PackageSelection.module.css'

const PackageSelection = () => {
   const packages = [
      {
         title: 'DEVELOPMENT',
         price: 10,
         features: ['1 Module Javascript', '1 Module Human Resources'],
         highlight: false,
      },
      {
         title: 'IT & SOFTWARE',
         price: 30,
         features: [
            '1 Module Javascript',
            '1 Module Human Resources',
            '2 Module Sales Teams',
            'Pack Marketing Skills',
            '5 Module Study Case',
         ],
         highlight: true,
      },
      {
         title: 'BUSINESS',
         price: 30,
         features: [
            '1 Module Javascript',
            '1 Module Human Resources',
            '2 Module Sales Teams',
         ],
         highlight: false,
      },
   ]

   return (
      <div className={styles.packageSelectionContainer}>
         <h2>Choose your package</h2>
         <p>We provide various types of packages just for you</p>
         <div className={styles.packageCards}>
            {packages.map((pkg, index) => (
               <div key={index} className={styles.packageCard}>
                  <h3>{pkg.title}</h3>
                  <div className={styles.price}>
                     <span>$</span>
                     {pkg.price}
                  </div>
                  <ul className={styles.features}>
                     {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                     ))}
                  </ul>
                  <button className={styles.buyButton}>Buy Now</button>
                  {pkg.highlight && <span className={styles.badge}>NEW!</span>}
               </div>
            ))}
         </div>
      </div>
   )
}

export default PackageSelection
