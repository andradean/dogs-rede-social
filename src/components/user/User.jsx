import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../Usercontext'
import Feed from '../feed/Feed'
import Notfound from '../Notfound'
import Userheader from './Userheader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  const {data} = React.useContext(UserContext)
  
  return (
    <section className='container'>
       <Userheader />
       <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserPhotoPost />}/>
        <Route path='estatisticas' element={<UserStats />}/>
        <Route path="*" element={<Notfound />}/>
       </Routes>
    </section>
  )
}

export default User
