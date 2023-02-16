import React from 'react'
import UserheaderNav from './UserHeaderNav'
import styles from './userHeader.module.css'
import { useLocation } from 'react-router-dom'


const Userheader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
      if('/conta/estatisticas' === location.pathname) setTitle('Estatísticas')
      if('/conta' === location.pathname) setTitle('Minha Conta')
      if('/conta/postar' === location.pathname) setTitle('Poste Sua Foto')

  }, [location])
  
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserheaderNav />
    </header>
  )
}

export default Userheader
