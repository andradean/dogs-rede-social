import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container` }>
        <Link className={styles.logo} to='/' aria-label='dogs - home'><Dogs /></Link>
        <Link className={styles.login} to='/login'>Login / criar</Link>

      </nav>
    </header>
  )
}

export default Header
