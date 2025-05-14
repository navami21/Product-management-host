import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import AddProduct from './components/AddProduct'

const App = () => {
  return (
    <Router>
    <Navbar />
    <div className="container mt-4" style={{ paddingTop: '60px' }}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  </Router>
    )
}

export default App