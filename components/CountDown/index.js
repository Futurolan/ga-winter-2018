import React from 'react'
import PropTypes from 'prop-types'
import Countdown, {zeroPad, getTimeDifference} from 'react-countdown-now'

import stylesheet from './styles.scss'

const renderer = ({ days, hours, minutes, seconds }) => {
  // Render a countdown
  return <div className='columns is-variable is-8'>
    <div className='column'>
      <div className='is-size-1 has-text-weight-bold'>{zeroPad(days)}</div>
      <hr />
      <div className='is-size-4'>{days <= 1 ? 'Jour' : 'Jours'}</div>
    </div>
    <div className='column'>
      <div className='is-size-1 has-text-weight-bold'>{zeroPad(hours)}</div>
      <hr />
      <div className='is-size-4'>{hours <= 1 ? 'Heure' : 'Heures'}</div>
    </div>
    <div className='column'>
      <div className='is-size-1 has-text-weight-bold'>{zeroPad(minutes)}</div>
      <hr />
      <div className='is-size-4'>{minutes <= 1 ? 'Minute' : 'Minutes'}</div>
    </div>
    <div className='column'>
      <div className='is-size-1 has-text-weight-bold'>{zeroPad(seconds)}</div>
      <hr />
      <div className='is-size-4'>{seconds <= 1 ? 'Seconde' : 'Secondes'}</div>
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
      <section className='ga-countdown section is-medium'>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />

        <div className=' has-text-centered container'>
          <h2 className='title  is-size-3'>{props.text}</h2>
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
