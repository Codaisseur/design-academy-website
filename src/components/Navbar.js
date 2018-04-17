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
        <a className="navbar-item" href="https://codaisseur.com" target="_blank">
          About Codaisseur
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <a href="https://codaisseur.typeform.com/to/njUnCH" className="button is-primary">APPLY NOW</a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
