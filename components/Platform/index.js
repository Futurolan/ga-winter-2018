import React from 'react'
import PropTypes from 'prop-types'

class Platform extends React.Component {
  render () {
    const { platform } = this.props
    const map = {
      pc: 'PC',
      ps4: 'PS4',
      wii_u: 'Wii U',
      xbox_one: 'Xbox One'
    }

    return (
      <span className='ga-platform' >{map[platform] ? map[platform] : platform}</span>
    )
  }
}

Platform.propTypes = {
  platform: PropTypes.string
}

export default Platform
