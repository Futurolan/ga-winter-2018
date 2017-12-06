import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import stylesheet from './styles.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isOpen: false}

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({isOpen: !this.state.isOpen})
  }
  render () {
    const pathname = this.props.router.pathname
    return (

      <header className='ga-header'>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <nav className='navbar is-transparent'>

          <div className='navbar-brand'>
            <Link href='/'>
              <a className='navbar-item is-size-4'>
                <strong>Gamers Assembly</strong>
              </a>
            </Link>
            <button className='button navbar-burger is-dark' onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={classNames('navbar-menu', {'is-active': this.state.isOpen})}>
            <div className='navbar-start' />
            <Link href='/news'>
              <a
                className={classNames('navbar-item', {'is-active': pathname === '/news'})}>Actualités</a>
            </Link>
            <Link href='/billeterie'>
              <a
                className={classNames('navbar-item', {'is-active': pathname === '/billeterie'})}>Billeterie</a>
            </Link>
            <Link href='/tournois'>
              <a
                className={classNames('navbar-item', {'is-active': pathname === '/tournois'})}>Tournois</a>
            </Link>
            <Link href='/info'>
              <a
                className={classNames('navbar-item', {'is-active': pathname === '/info'})}>Infos
                  pratiques</a>
            </Link>
            <Link href='/partenaires'>
              <a
                className={classNames('navbar-item', {'is-active': pathname === '/partenaires'})}>Partenaires</a>
            </Link>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <a className='control' href='https://www.facebook.com/GamersAssembly'>
                    <i className='fa fa-facebook-official' />
                  </a>
                  <a className='control' href='https://twitter.com/GamersAssembly'>
                    <i className='fa fa-twitter' />
                  </a>
                  <a className='control' href='https://www.flickr.com/photos/futurolan'>
                    <i className='fa fa-flickr' />
                  </a>
                  <a className='control' href='https://twitch.tv/gamers_assembly'>
                    <i className='fa fa-twitch' />
                  </a>
                  <a className='control' href='https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw'>
                    <i className='fa fa-youtube-play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  router: PropTypes.object
}

export default withRouter(Header)
