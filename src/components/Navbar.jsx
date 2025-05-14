import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
    const location = useLocation();
  const isHome = location.pathname === '/'
  return (
    <>
      <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/">Product Manager</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          {!isHome && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-product">Add Product</Link>
              </li>
            )}
        </ul>
      </div>
    </div>
  </nav>  

    </>
  )
}

export default Navbar