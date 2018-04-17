import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import favicon from '../img/favicon.ico'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet titleTemplate="%s | Codaisseur UX and Design Academy Amsterdam">
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
