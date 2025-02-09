import React, { useState } from 'react'
import styles from './LanguageSwitcher.module.css'
import e_flag from '../../../assets/english-flag.svg'
import arrow_down from '../../../assets/arrow-down.svg'
import english from './assets/english.svg'
import vietnam from './assets/vietnam.svg'

const languages = [
   { code: 'EN', name: 'ENGLISH', flag: english },
   { code: 'VN', name: 'VIỆT NAM', flag: vietnam },
]

const LanguageSwitcher = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [language, setLanguage] = useState('EN')

   const toggleDropdown = () => setIsOpen((prev) => !prev)
   const handleChangeLanguage = (language) => {
      setIsOpen(false)
      setLanguage(language)
   }

   return (
      <div className={styles.languageSwitcher}>
         <button className={styles.toggleButton} onClick={toggleDropdown}>
            <img
               src={language === 'EN' ? english : vietnam}
               alt='English Flag'
               className={styles.flagIcon}
            />
            <span className={styles.language}>{language}</span>
            <img src={arrow_down} alt='Dropdown Arrow' />
         </button>

         {isOpen && (
            <div className={styles.dropdown}>
               {languages.map((lang, index) => (
                  <div
                     key={index}
                     className={styles.dropdownItem}
                     onClick={() => handleChangeLanguage(lang.code)}
                  >
                     <div className={styles.flag}>
                        <img src={lang.flag} alt='Dropdown Arrow' />
                     </div>
                     <div className={styles.name}>{lang.name}</div>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default LanguageSwitcher
