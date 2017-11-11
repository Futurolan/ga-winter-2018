import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import stylesheet from './styles.scss'

const Header = (props) => (

  <header className='ga-header'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <nav className='navbar is-transparent'>
      <div className='container'>

        <div className='navbar-brand'>
          <Link href='/'>
            <a className='navbar-item is-size-4'>
              <strong>Gamers Assembly</strong>
            </a>
          </Link>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start '>
            <Link href='/news'>
              <a className={classNames('navbar-item', {'is-active': props.router.pathname === '/news'})}>Actualités</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  </header>
)

Header.propTypes = {
  router: PropTypes.object
}

export default withRouter(Header)
