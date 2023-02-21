import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRouter from "./components/helper/ProtectedRouter";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Notfound from "./components/Notfound";
import Photo from "./components/photo/Photo";
import User from "./components/user/User";
import UserProfile from "./components/user/UserProfile";
import { UserStorage } from "./Usercontext";


function App() {
  return (
   <div>
    <BrowserRouter>
    <UserStorage>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="login/*" element={<Login />}/>
      <ProtectedRouter  path='conta/*' element={<User />}/>
      <Route path="foto/:id" element={<Photo />}/>
      <Route path="perfil/:user" element={<UserProfile />}/>
      <Route path="*" element={<Notfound />}/>
    </Routes>
    <Footer />
    </UserStorage>
    </BrowserRouter>
   </div>
    )
}

export default App;
