import React from 'react'
import logo from './assets/logo.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'
import mail from './assets/mail.svg'
import styles from './Footer.module.css'
import PromoBanner from '../PromoBanner/PromoBanner'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
               <img
                  src={logo}
                  alt='Macode Logo'
                  className={styles.footerLogo}
               />
               Macode
            </div>
            <nav className={styles.footerNav}>
               <a href='#tutorials'>Tutorials</a>
               <a href='#case-studies'>Case Studies</a>
               <a href='#resources'>Resources</a>
            </nav>
         </div>
         <div className={styles.footerBottom}>
            <div className={styles.footerSocial}>
               <img src={facebook} alt='Facebook' className={styles.icon} />
               <img src={instagram} alt='Instagram' className={styles.icon} />
               <img src={linkedin} alt='LinkedIn' className={styles.icon} />
               <img src={twitter} alt='Twitter' className={styles.icon} />
               <img src={mail} alt='Mail' className={styles.icon} />
            </div>
            <p className={styles.copyright}>
               © 2021 Copyright.
               <a href='https://macode.io' className={styles.author}>
                  Macode.io
               </a>
            </p>
         </div>
         <div className={styles.promoBanner}>
            <PromoBanner />
         </div>
      </footer>
   )
}

export default Footer
