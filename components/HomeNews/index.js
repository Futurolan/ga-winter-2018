import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import stylesheet from './styles.scss'
import NewsCard from 'components/NewsCard'
import PropTypes from 'prop-types'

function HomeNews ({
  data: { loading, error, nodeQuery }
}) {
  if (error) return <div>Error Loading Post</div>

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length) {
    return <section className='ga-home-news section is-medium'>
      <style dangerouslySetInnerHTML={{__html: stylesheet}} />
      <div className='container '>
        <h2 className='title '>Suivez nos dernières actualités</h2>
        <div className='columns is-6 is-variable'>
          {nodeQuery.entities.map((news) => (
            <div className='column' key={news.nid}>
              <NewsCard
                id={news.nid}
                created={news.created}
                title={news.title}
                imgMobileUrl={news.image.mobile.url}
                imgDesktopUrl={news.image.desktop.url}
                imgWidescreenUrl={news.image.widescreen.url}
                imgFullhdUrl={news.image.fullhd.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  }
  return <div>Loading...</div>
}

export const news = gql`
{
  nodeQuery(filter:{
  conditions:[{field:"type",value:["news"],operator:EQUAL}]},
  sort:[{field:"created",direction:DESC}],
  limit:3) {
    entities {
      ... on NodeNews{
        nid,
        created,
        title,
        image:fieldNewsImage{
          mobile:derivative(style:crop_2_1_720x360){
            url
          }
          desktop:derivative(style:crop_2_1_288x144){
            url
          }
          widescreen:derivative(style:crop_2_1_352x176){
            url
          }
          fullhd:derivative(style:crop_2_1_416x208){
            url
          }
        }
      }
    }
  }
}
`
HomeNews.propTypes = {
  data: PropTypes.object
}

export default graphql(news)(HomeNews)
