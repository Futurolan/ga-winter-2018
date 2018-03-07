import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ name, children }) => (
  <div className={`wrapper ${name}`}>
    <Header />
    <main className='main'>
      { children }
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Layout
