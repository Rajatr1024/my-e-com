import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Product from './pages/product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className = 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/collection' element = {<Collection />} />
        <Route path = '/About' element = {<About />} />
        <Route path = '/contacts' element = {<Contacts />} />
        <Route path = '/product/:productId' element = {<Product />} />
        <Route path = '/Cart' element = {<Cart />} />
        <Route path = '/Login' element = {<Login />} />
        <Route path = '/PlaceOrder' element = {<PlaceOrder />} />
        <Route path = '/Orders' element = {<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
