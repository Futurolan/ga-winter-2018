import React from 'react'
import PropTypes from 'prop-types'
import Countdown, {zeroPad, getTimeDifference} from 'react-countdown-now'

import stylesheet from './styles.scss'

const renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
  return <div className='columns'>
    <div className='column'>
      <div className='countdown-number'>{zeroPad(days)}</div>
      <hr />
      <div className='is-size-2'>{days <= 1 ? 'Jour' : 'Jours'}</div>
    </div>
    <div className='column'>
      <div className='countdown-number'>{zeroPad(hours)}</div>
      <hr />
      <div className='is-size-2'>{hours <= 1 ? 'Heure' : 'Heures'}</div>
    </div>
    <div className='column'>
      <div className='countdown-number'>{zeroPad(minutes)}</div>
      <hr />
      <div className='is-size-2'>{minutes <= 1 ? 'Minute' : 'Minutes'}</div>
    </div>
    <div className='column'>
      <div className='countdown-number'>{zeroPad(seconds)}</div>
      <hr />
      <div className='is-size-2'>{seconds <= 1 ? 'Seconde' : 'Secondes'}</div>
    </div>
  </div>
}

renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
}

const CountDown = (props) => {
  if (getTimeDifference(props.date).total > 0) {
    return (
      <section className='ga-countdown section'>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />

        <div className='has-text-white has-text-centered container'>
          <h3 className='title has-text-white is-size-1 is-uppercase'>{props.text}</h3>
          <Countdown date={props.date} renderer={renderer} />
        </div>
      </section>
    )
  } else {
    return null
  }
}

CountDown.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string
}

export default CountDown
