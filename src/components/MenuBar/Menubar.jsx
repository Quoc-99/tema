import React, { useEffect, useState } from 'react'
import styles from './MenuBar.module.css'
import setting from './assets/setting.svg'
import case_study from './assets/case-study.svg'
import resources from './assets/resources.svg'
import arrow_right from './assets/arrow-right.svg'
import close from './assets/close.svg'
import facebook from '../Footer/assets/facebook.svg'
import instagram from '../Footer/assets/instagram.svg'
import linkedin from '../Footer/assets/linkedin.svg'
import twitter from '../Footer/assets/twitter.svg'
import mail from '../Footer/assets/mail.svg'

const MenuBar = ({ isOpen = false, handleClose }) => {
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'auto'
      }

      return () => {
         document.body.style.overflow = 'auto'
      }
   }, [isOpen])

   return (
      <div className={`${styles.menuBarContainer} ${isOpen && styles.display}`}>
         <div className={styles.iconClose} onClick={handleClose}>
            <img src={close} alt='' />
         </div>
         <div className={styles.menus}>
            <div className={styles.menusItem}>
               <img src={setting} alt='' />
               <p className={styles.name}>Tutorials</p>
               <img className={styles.iconArrow} src={arrow_right} alt='' />
            </div>
            <div className={styles.menusItem}>
               <img src={case_study} alt='' />
               <p className={styles.name}>Case studies</p>
               <img className={styles.iconArrow} src={arrow_right} alt='' />
            </div>
            <div className={styles.menusItem}>
               <img src={resources} alt='' />
               <p className={`${styles.name} ${styles.resources}`}>Resources</p>
               <img className={styles.iconArrow} src={arrow_right} alt='' />
            </div>
         </div>
         <div className={styles.footer}>
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
      </div>
   )
}

export default MenuBar
