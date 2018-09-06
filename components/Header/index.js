import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from '../ActiveLink'

import './styles.scss'
import TicketMenu from '../TicketMenu'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render () {
    return (

      <header className='ga-header'>
        <nav className='navbar has-background-primary'>
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
          <div className={classNames('navbar-menu', 'has-background-primary', 'has-text-centered', { 'is-active': this.state.isOpen })} >
            <div className='navbar-start' />
            <div className='navbar-item'>
              <ActiveLink label='Actualités' className='has-text-white is-uppercase has-text-weight-bold' path='/news' />
            </div>
            <TicketMenu />
            <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label='Tournois' className='has-text-white' path='/tournois' />
            </div>
            <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label='Infos pratiques' className='has-text-white' path='/infos' />
            </div>
            <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label='Partenaires' className='has-text-white' path='/partenaires' />
            </div>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <a className='control has-text-white' target='_blank' href='https://www.facebook.com/GamersAssembly'>
                    <i className='fab fa-facebook' />
                  </a>
                  <a className='control has-text-white' target='_blank' href='https://twitter.com/GamersAssembly'>
                    <i className='fab fa-twitter' />
                  </a>
                  <a className='control has-text-white' target='_blank' href='https://www.flickr.com/photos/futurolan'>
                    <i className='fab fa-flickr' />
                  </a>
                  <a className='control has-text-white' target='_blank' href='https://twitch.tv/gamers_assembly'>
                    <i className='fab fa-twitch' />
                  </a>
                  <a className='control has-text-white' target='_blank' href='https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw'>
                    <i className='fab fa-youtube' />
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
