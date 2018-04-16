import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '108px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/program">
          Program
        </Link>
        <Link className="navbar-item" to="/about">
          About Codaisseur
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/enroll" className="button is-primary" >ENROLL NOW</Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
