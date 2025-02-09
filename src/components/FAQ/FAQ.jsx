import React, { useState } from 'react'
import styles from './FAQ.module.css'
import subtract from './assets/subtract.svg'
import plus from './assets/plus.svg'

const faqs = [
   {
      question: '01. Can I Find the right information faster?',
      answer:
         'Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermentum.',
   },
   {
      question: '02. How to share feature demos and ideas?',
      answer:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
   },
   {
      question: '03. How to get insights from users?',
      answer:
         'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
   },
   {
      question: '04. Can I develop my website without code?',
      answer:
         'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
   },
]

const FAQ = () => {
   const [activeIndex, setActiveIndex] = useState(null)

   const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index)
   }

   return (
      <div className={styles.faqContainer}>
         <h2>FAQs</h2>
         {faqs.map((faq, index) => (
            <div
               key={index}
               className={styles.faqItem}
               onClick={() => toggleFAQ(index)}
            >
               <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <img src={activeIndex === index ? subtract : plus} alt='' />
               </div>
               {activeIndex === index && (
                  <div className={styles.faqAnswer}>{faq.answer}</div>
               )}
            </div>
         ))}
      </div>
   )
}

export default FAQ
