import React from 'react'
import styles from './Courses.module.css'
import udemy from '../../assets/udemy.svg'
import cousera from '../../assets/cousera.svg'
import edx from '../../assets/edx.svg'

const Courses = () => {
   return (
      <div className={styles.course}>
         <img src={edx} />
         <img src={cousera} />
         <img src={udemy} />
      </div>
   )
}

export default Courses
