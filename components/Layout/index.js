import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

const Layout = ({ children }) => (
  <div className='ga-client'>
    <Header />
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
