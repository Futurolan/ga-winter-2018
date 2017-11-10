import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Header = (props) => (

  <header>
    <nav className='navbar ' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link href='/'>
          <a className='navbar-item is-size-4'>
            <strong>Gamers Assembly</strong>
          </a>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link href='/'>
            <a className={classNames('navbar-item', {'is-active': props.router.pathname === '/'})}>Actualités</a>
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  router: PropTypes.object
}

export default withRouter(Header)
