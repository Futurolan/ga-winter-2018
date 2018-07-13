import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './styles.scss'
import NewsCard from 'components/NewsCard'
import PropTypes from 'prop-types'

function NewsList ({
  data: { loading, error, nodeQuery }
}) {
  if (error) return <div>Error Loading Post</div>

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length) {
    return <div className='ga-news-list'>
      <div className='columns is-multiline is-6  is-variable'>
        {nodeQuery.entities.map((news, index) => (
          <div className='column is-one-third' key={news.nid}>
            <NewsCard
              nid={news.nid}
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
  }
  return <div>Loading...</div>
}

export const news = gql`
{
  nodeQuery(filter:{
  conditions:[
    {field:"field_news_editions",value:["${process.env.EDITION_ID}"]},
    {field:"type",value:["news"],operator:EQUAL}
  ]},
  sort:[{field:"created",direction:DESC}],limit:999) {
    entities {
      ... on NodeNews{
        nid,
        created,
        title,
        image:fieldNewsImage{
          mobile:derivative(style:CROP_2_1_720X360){
            url
          }
          desktop:derivative(style:CROP_2_1_288X144){
            url
          }
          widescreen:derivative(style:CROP_2_1_352X176){
            url
          }
          fullhd:derivative(style:CROP_2_1_416X208){
            url
          }
        }
      }
    }
  }
}
`

NewsList.propTypes = {
  data: PropTypes.object
}

export default graphql(news)(NewsList)
