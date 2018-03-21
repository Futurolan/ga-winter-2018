import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from 'components/ActiveLink'

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

export default Header
