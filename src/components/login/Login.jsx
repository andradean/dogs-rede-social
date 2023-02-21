import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../Usercontext'
import styles from './login.module.css'
import Notfound from '../Notfound'
import LoginLost from './LoginLost'



const Login = () => {
  const { login } = React.useContext(UserContext)

  if(login === true) return <Navigate to='/conta'/>
 
  return (
  <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='criar' element={<LoginCreate />}/>
        <Route path='resetar' element={<LoginPasswordReset />}/>
        <Route path='perdeu' element={<LoginLost />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      </div>
  </section>
    
  )
}

export default Login
