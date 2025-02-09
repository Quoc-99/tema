import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import logo_name from '../../assets/logo-name.svg'
import menu from './assets/menu.svg'
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import MenuBar from '../MenuBar/Menubar'

const Header = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <img src={logo} width={32} height={32} alt='Logo' />
            <img src={logo_name} className={styles.logoName} alt='Logo' />
         </div>
         <nav className={styles.nav}>
            <a href='#' className={styles.navLink}>
               Tutorials
            </a>
            <span className={styles.separator}>·</span>
            <a href='#' className={styles.navLink}>
               Case studies
            </a>
            <span className={styles.separator}>·</span>
            <a href='#' className={styles.navLink}>
               Resources
            </a>
         </nav>
         <LanguageSwitcher />
         <div className={styles.menu}>
            <img src={menu} alt='Menu' onClick={() => setIsOpen(true)} />
         </div>
         <MenuBar
            isOpen={isOpen}
            handleClose={() => {
               setIsOpen(false)
            }}
         />
      </header>
   )
}

export default Header
