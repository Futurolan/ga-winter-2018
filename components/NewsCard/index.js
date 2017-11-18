import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Moment from 'react-moment'

import stylesheet from './styles.scss'

const NewsCard = (props) => (
  <div className='ga-news-card card has-ribbon '>
    <div className='ribbon has-text-weight-light is-size-7'><Moment format='DD/MM/YYYY'>{props.created}</Moment></div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Link href={`/news/${props.id}`}>
      <div>
        <div className='card-image'>
          <figure className='image is-2by1'>
            <img src={props.imgUrl} alt='Placeholder image' />
          </figure>
        </div>
        <div className='card-content '>
          <div className='content has-text-white is-uppercase has-text-weight-semibold'>
            {props.title}
          </div>
        </div>
      </div>
    </Link>
  </div>
)

NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  created: PropTypes.string
}

export default NewsCard
