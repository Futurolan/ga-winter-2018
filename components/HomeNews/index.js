import React from 'react'
import PropTypes from 'prop-types'

import NewsCard from 'components/NewsCard'

import stylesheet from './styles.scss'

class HomeNews extends React.Component {
  render () {
    let newsCards = []

    if (this.props.news) {
      newsCards = this.props.news.map(function (news) {
        return <div className='column' key={news.get('nid')}>
          <NewsCard id={news.get('nid')} created={news.get('entityCreated')} title={news.get('title')} imgUrl={news.getIn(['fieldNewsImage', 'url'])} />
        </div>
      })
    }

    return (
      <section className='ga-home-news section'>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <div className='container '>
          <h3 className='title has-text-white is-uppercase'>Dernières actualités</h3>
          <div className='columns is-6 is-variable'>
            {newsCards}
          </div>
        </div>
      </section>
    )
  }
}

HomeNews.propTypes = {
  news: PropTypes.object
}

export default HomeNews
