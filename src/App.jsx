import styles from './App.module.css'
import Introduce from './components/Introduce/Introduce'
import Courses from './components/Courses/Courses'
import Slices from './components/Slices/Slices'
import CodeFeature from './components/CodeFeature/CodeFeature'
import TutorShowcase from './components/TutorShowcase/TutorShowcase'
import PackageSelection from './components/PackageSelection/PackageSelection'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import scrollTop from './assets/scroll-top.svg'

function App() {
   const handleScrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   return (
      <div className={styles.app}>
         <div>
            <div className={styles.header}>
               <Introduce />
            </div>
            <div className={styles.content}>
               <Courses />
               <Slices />
               <CodeFeature />
               <TutorShowcase />
               <PackageSelection />
               <FAQ />

               <img
                  className={styles.scrollTop}
                  src={scrollTop}
                  onClick={handleScrollToTop}
                  alt=''
               />
            </div>
            <div className={styles.footer}>
               <Footer />
            </div>
         </div>
      </div>
   )
}

export default App
