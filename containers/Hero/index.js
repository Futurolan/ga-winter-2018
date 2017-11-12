import React from 'react'
import PropTypes from 'prop-types'

import stylesheet from './styles.scss'

const Hero = (props) => (
  <section className='ga-hero'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='hero is-fullheight has-text-centered' style={{background: `url('${process.env.BACKEND_API_URL}${props.imgUrl}') no-repeat center center`}}>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title has-text-white'>{props.title}</h1>
          {props.subtitle && <h2 className='subtitle is-size-2 has-text-white-bis'>{props.subtitle}</h2>}
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgUrl: PropTypes.string
}

export default Hero
