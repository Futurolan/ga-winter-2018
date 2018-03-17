import React from 'react'

import ActiveLink from 'components/ActiveLink'

import stylesheet from './styles.scss'

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer ga-footer'>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <div className='container'>
          <div className='content has-text-centered'>
            <ActiveLink label='Contacts' path='contacts' />
            <span> - </span>
            <ActiveLink label='Accreditation Presse' path='espace-presse' />
            <span> - </span>
            <ActiveLink label='Mentions Légales ' path='mentions_legales' />
            <span> - </span>
            <ActiveLink label='Recrutement' path='recrutement' />
          </div>

        </div>
      </footer>
    )
  }
}

export default Footer
