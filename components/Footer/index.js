import React from 'react'

import ActiveLink from 'components/ActiveLink'

import './styles.scss'

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer ga-footer'>
        <div className='container'>
          <div className='content has-text-centered'>
            <ActiveLink label='Contacts' path='/contacts' />
            <span> - </span>
            <ActiveLink label='Accreditation Presse' path='/espace-presse' />
            <span> - </span>
            <ActiveLink label='Mentions Légales ' path='/mentions-legales' />
            <span> - </span>
            <ActiveLink label='Recrutement' path='/recrutement' />
          </div>

        </div>
      </footer>
    )
  }
}

export default Footer
