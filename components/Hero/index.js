import React from 'react'

import stylesheet from './styles.scss'

const Hero = (props) => (
  <section className='ga-hero'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='hero is-fullheight has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title is-size-1 has-text-white'>
          Gamers Assembly 2018
        </h1>
          <h2 className='subtitle is-size-2 has-text-white-bis'>
          Le 15, 16 et 24 Avril à Poitiers
        </h2>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
