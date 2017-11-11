import React from 'react'
import PropTypes from 'prop-types'
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar'

import Header from 'components/Header'

const Layout = ({ name, children }) => (
  <div className={name}>
    <Header />
    <LoadingBar showFastActions />
    { children }
  </div>
)

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Layout
