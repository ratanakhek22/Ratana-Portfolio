import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import myPhoto from '../../assets/Selfie_Temp.jpeg'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.terminalColumn}>
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
              <span className={styles.terminalTitle}>guest@portfolio: ~</span>
            </div>

            <div className={styles.terminalBody}>
              <p className={styles.line}>
                <span className={styles.prompt}>guest@portfolio</span>
                <span className={styles.tilde}>:~$</span>
                <span className={styles.command}> whoami</span>
              </p>

              <h1 className={styles.name}>Sovannratana Khek</h1>
              <p className={styles.role}>Full-Stack Engineer / Full-Stack Developer</p>
              <p className={styles.hook}>
                Software Engineer specializing in end-to-end web applications, automation scripting, and performance benchmarking/research.
              </p>

              <div className={styles.actions}>
                <a href="#projects" className={styles.primaryBtn}>View projects</a>
                <a href="/files/SWE Resume Sovannratana Khek.pdf" className={styles.secondaryBtn} download>Resume</a>
                <a href="#contact" className={styles.secondaryBtn}>Contact</a>
              </div>

              <p className={styles.line}>
                <span className={styles.prompt}>guest@portfolio</span>
                <span className={styles.tilde}>:~$</span> 
                <span className={styles.command}> scroll</span>
                <span className={styles.cursor}>_</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.photoColumn}>
          <div className={styles.photoFrame}>
            <img
              src={myPhoto}
              alt="Portrait of Sovannratana Khek"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero