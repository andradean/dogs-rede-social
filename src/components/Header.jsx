import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { UserContext } from '../Usercontext'

const Header = () => {
  const { data, userlogout } = React.useContext(UserContext)
  
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container` }>
        <Link className={styles.logo} to='/' aria-label='dogs - home'>
          <Dogs />
        </Link>
        {data ? (
        <Link className={styles.login} to='/login'>
          {data && data.nome}
          <button onClick={ userlogout }>sair</button>

        </Link>
        ): ( 
        <Link className={styles.login} to='/login'>
        Login / criar
        </Link> 
      )}
       

      </nav>
    </header>
  )
}

export default Header
