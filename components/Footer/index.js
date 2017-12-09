import React from 'react'
import stylesheet from './styles.scss'

const Footer = (props) => (
  <footer className='footer ga-footer'>
    <style dangerouslySetInnerHTML={{__html: stylesheet}} />
    <div className='container'>
      <div className='content has-text-centered'>
        Contacts  Espace Presse  Mentions Légales  Recrutement
      </div>
    

    </div>
  </footer>
)

export default Footer
