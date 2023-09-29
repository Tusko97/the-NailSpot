import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import BookASlot from "./components/BookASlot";
import OurServices from "./components/OurServices";
import Navbar from "./components/Navbar";

import "./styles.css"



function App (){
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home />}></Route>
      <Route path="/OurServices" element={<OurServices/>}></Route>
      <Route path="/BookASlot" element={<BookASlot/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;

