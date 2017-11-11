import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import stylesheet from './styles.scss'

const NewsCard = (props) => (
  <div className='ga-news-card card has-ribbon'>
    <div className='ribbon has-text-weight-light is-size-7'>21/12/2017</div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Link href={`/news/${props.id}`}>
      <div>
        <div className='card-image'>
          <figure className='image is-2by1'>
            <img src={props.imgUrl} alt='Placeholder image' />
          </figure>
        </div>
        <div className='card-content has-text-centered '>
          <div className='content has-text-white is-uppercase has-text-weight-semibold'>
            {props.title}
          </div>
        </div>
      </div>
    </Link>
  </div>
)

NewsCard.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  id: PropTypes.number
}

export default NewsCard
