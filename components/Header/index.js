import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import stylesheet from './styles.scss'

const Header = (props) => (

  <header className='ga-header'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <nav className='navbar'>
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
            <Link href='/tournaments'>
              <a className={classNames('navbar-item', {'is-active': props.router.pathname === '/tournaments'})}>Tournois</a>
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <a className='control' href='https://www.facebook.com/GamersAssembly'>
                  <i className='fa fa-2x fa-facebook-official' />
                </a>
                <a className='control' href='https://twitter.com/GamersAssembly'>
                  <i className='fa fa-2x fa-twitter' />
                </a>
                <a className='control' href='https://www.flickr.com/photos/futurolan'>
                  <i className='fa fa-2x fa-flickr' />
                </a>
                <a className='control' href='https://twitch.tv/gamers_assembly'>
                  <i className='fa fa-2x fa-twitch' />
                </a>
                <a className='control' href='https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw'>
                  <i className='fa fa-2x fa-youtube-play' />
                </a>
              </div>
            </div>
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
