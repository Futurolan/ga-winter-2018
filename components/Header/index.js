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

      <div className='navbar-brand'>
        <Link href='/'>
          <a className='navbar-item is-size-4 has-text-white'>
            <strong>Gamers Assembly</strong>
          </a>
        </Link>
        <button className='button navbar-burger is-dark'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start' />
        <Link className='navbar-item' href='/news' >
          <a className={classNames('navbar-item', 'has-text-white', {'is-active': props.router.pathname === '/news'})}>Actualités</a>
        </Link>
        <Link className='navbar-item' href='/billeterie'>
          <a className={classNames('navbar-item', 'has-text-white', {'is-active': props.router.pathname === '/billeterie'})}>Billeterie</a>
        </Link>
        <Link className='navbar-item' href='/tournois'>
          <a className={classNames('navbar-item', 'has-text-white', {'is-active': props.router.pathname === '/tournois'})}>Tournois</a>
        </Link>
        <Link className='navbar-item' href='/info'>
          <a className={classNames('navbar-item', 'has-text-white', {'is-active': props.router.pathname === '/info'})}>Infos pratiques</a>
        </Link>
        <Link className='navbar-item' href='/partenaires'>
          <a className={classNames('navbar-item', 'has-text-white', {'is-active': props.router.pathname === '/partenaires'})}>Partenaires</a>
        </Link>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <a className='control has-text-white' href='https://www.facebook.com/GamersAssembly'>
                <i className='fa fa-facebook-official' />
              </a>
              <a className='control has-text-white' href='https://twitter.com/GamersAssembly'>
                <i className='fa fa-twitter' />
              </a>
              <a className='control has-text-white' href='https://www.flickr.com/photos/futurolan'>
                <i className='fa fa-flickr' />
              </a>
              <a className='control has-text-white' href='https://twitch.tv/gamers_assembly'>
                <i className='fa fa-twitch' />
              </a>
              <a className='control has-text-white' href='https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw'>
                <i className='fa fa-youtube-play' />
              </a>
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
