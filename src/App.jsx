import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";
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
    </Routes>
    <Footer />
    </UserStorage>
    </BrowserRouter>
   </div>
    )
}

export default App;
