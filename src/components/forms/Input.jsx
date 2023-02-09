import React from 'react'
import styles from './input.module.css'

const Input = ({label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
       onChange={onChange}
       value={value}
       id={name}
       name={name}
       type={type}
       className={styles.input}
       onBlur={onBlur}

        />
   {error &&<p className={styles.error}>{error}</p>}
  </div> 
    
  )
}

export default Input
