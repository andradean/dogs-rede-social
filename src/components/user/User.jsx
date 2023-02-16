import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import Userheader from './Userheader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  return (
    <section className='container'>
       <Userheader />
       <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='postar' element={<UserPhotoPost />}/>
        <Route path='estatisticas' element={<UserStats />}/>


       
       </Routes>
    </section>
  )
}

export default User
