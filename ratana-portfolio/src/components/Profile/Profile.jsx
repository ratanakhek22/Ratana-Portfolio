import { useState } from 'react'
import styles from './Profile.module.css'

function Profile() {

  return (
    <section className={styles.profile}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Profile TODO</h2>
      </div>
    </section>
  )
}

export default Profile