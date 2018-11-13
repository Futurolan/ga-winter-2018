import React from 'react'
import PropTypes from 'prop-types'

import config from 'config/config'

import './styles.scss'

const Banner = (props) => (
  <section className='ga-banner has-text-centered'>
    <img src={props.imgUrl} />
    <h1>{config.title}</h1>
  </section>
)

Banner.propTypes = {
  imgUrl: PropTypes.string
}

export default Banner
