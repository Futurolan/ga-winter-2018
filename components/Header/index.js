import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from 'components/ActiveLink'

import './styles.scss'

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
    return (

      <header className='ga-header'>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <Link href='/'>
              <a>
                <img src='/static/img/logo-orange-100x100.png' />
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
            <div className='navbar-item'>
              <ActiveLink label='Actualités' path='/news' />
            </div>
            {/* <div className='navbar-item'> */}
            {/* <ActiveLink label='Billeterie' path='/billeterie' /> */}
            {/* </div> */}
            <div className='navbar-item'>
              <ActiveLink label='Tournois' path='/tournois' />
            </div>
            <div className='navbar-item'>
              <ActiveLink label='Infos pratiques' path='/infos' />
            </div>
            <div className='navbar-item'>
              <ActiveLink label='Partenaires' path='/partenaires' />
            </div>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <a className='control' target='_blank' href='https://www.facebook.com/GamersAssembly'>
                    <i className='fa fa-facebook-official' />
                  </a>
                  <a className='control' target='_blank' href='https://twitter.com/GamersAssembly'>
                    <i className='fa fa-twitter' />
                  </a>
                  <a className='control' target='_blank' href='https://www.flickr.com/photos/futurolan'>
                    <i className='fa fa-flickr' />
                  </a>
                  <a className='control' target='_blank' href='https://twitch.tv/gamers_assembly'>
                    <i className='fa fa-twitch' />
                  </a>
                  <a className='control' target='_blank' href='https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw'>
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

export default Header
