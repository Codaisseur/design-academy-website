import React from 'react'
import Link from 'gatsby-link'
import Logo from '../img/codaisseur-white.svg'
import AmsterdamCityLogo from '../img/logo-amsterdam-city-white.png'
import CRKBOLogo from '../img/logo-crkbo-white.png'
import UWVLogo from '../img/logo-uwv-white.png'
import './Footer.sass'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import CircleIcon from '@fortawesome/fontawesome-free-solid/faCircle'
import TwitterIcon from '@fortawesome/fontawesome-free-brands/faTwitter'
import FacebookIcon from '@fortawesome/fontawesome-free-brands/faFacebook'
import LinkedinIcon from '@fortawesome/fontawesome-free-brands/faLinkedin'
import GithubIcon from '@fortawesome/fontawesome-free-brands/faGithub'

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Link to="/">
            <img alt="Codaisseur" src={Logo} />
          </Link>
        </div>
        <div className="column">
          <p className="address">
            <strong>Codaisseur BV</strong><br/>
            <a href="mailto:info@codaisseur.com">info@codaisseur.com</a><br/>
            Tripolis<br/>
            Burgerweeshuispad 201<br/>
            1076 GR Amsterdam<br/>
            The Netherlands<br/>
            +31202615197
          </p>
        </div>
        <div className="column">
          <div className="social-icons">
            <div className="icon-container">
              <a href="https://twitter.com/codaisseur" target="_blank">
                <span className="fa-layers fa-fw fa-1x">
                  <FontAwesomeIcon icon={CircleIcon} color="white" size="2x" fixedWidth />
                  <FontAwesomeIcon icon={TwitterIcon} color="#1a1a1a" style={{color: "#1a1a1a"}} fixedWidth inverse size="2x" transform="shrink-6" />
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a href="https://www.facebook.com/codaisseur" target="_blank">
                <span className="fa-layers fa-fw fa-1x">
                  <FontAwesomeIcon icon={CircleIcon} color="white" size="2x" fixedWidth />
                  <FontAwesomeIcon icon={FacebookIcon} color="#1a1a1a" style={{color: "#1a1a1a"}} fixedWidth inverse size="2x" transform="shrink-6" />
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a href="https://www.linkedin.com/company/development-bootcamp" target="_blank">
                <span className="fa-layers fa-fw fa-1x">
                  <FontAwesomeIcon icon={CircleIcon} color="white" size="2x" fixedWidth />
                  <FontAwesomeIcon icon={LinkedinIcon} color="#1a1a1a" style={{color: "#1a1a1a"}} fixedWidth inverse size="2x" transform="shrink-6" />
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a href="https://github.com/codaisseur" target="_blank">
                <span className="fa-layers fa-fw fa-1x">
                  <FontAwesomeIcon icon={CircleIcon} color="white" size="2x" fixedWidth />
                  <FontAwesomeIcon icon={GithubIcon} color="#1a1a1a" style={{color: "#1a1a1a"}} fixedWidth inverse size="2x" transform="shrink-6" />
                </span>
              </a>
            </div>
          </div>
          <div className="syndicates">
            <a href="https://www.crkbo.nl/Register/Instellingen" hrefLang="nl" rel="nofollow" className="syndicate">
              <figure className="image is-48x48">
                <img
                  alt="CRKBO GEREGISTREERDE INSTELLING"
                  src={CRKBOLogo} />
              </figure>
            </a>
            <a href="https://www.uwv.nl/overuwv/index.aspx" hrefLang="nl" rel="nofollow" className="syndicate">
              <figure className="image is-48x48">
                <img
                  alt="UWV"
                  src={UWVLogo} />
              </figure>
            </a>
            <a href="https://www.amsterdam.nl/" hrefLang="nl" rel="nofollow" className="syndicate">
              <figure className="image is-48x48">
                <img
                  alt="GEMEENTE AMSTERDAM"
                  src={AmsterdamCityLogo} />
              </figure>
            </a>
          </div>
        </div>
      </div>
      <div className="content has-text-centered" style={{ marginTop: '4rem' }}>
        <p>
          <strong>Codaisseur Design Academy</strong> is a product by <a href="https://codaisseur.com">Codaisseur</a> • © 2015 - {(new Date()).getFullYear()} Codaisseur BV<br />
          <a href="https://www.developmentbootcamp.com/terms-and-conditions">Terms and Conditions</a> • Made with ♥ in ✖✖✖<br />
          KvK: 63359359 • VAT ID: NL855202907B01 • Bank: NL59BUNQ2025584334
        </p>
      </div>
    </div>
  </footer>
)
