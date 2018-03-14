import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import stylesheet from './styles.scss'
import Moment from 'react-moment'
import Meta from 'components/Meta'

function NewsContent ({data: { loading, error, nodeById }}) {
  if (error) return <div>Error Loading News</div>

  if (nodeById) {
    return <div className='ga-news-content'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Meta title={nodeById.title} />
      <section className='section'>

        <div className='container'>
          <figure className='image is-5by1'>
            <img srcSet={`${nodeById.image.mobile.url} 705w, ${nodeById.image.desktop.url} 960w, ${nodeById.image.widescreen.url} 1155w, ${nodeById.image.fullhd.url} 1345w`} />
          </figure>
          <div className='is-pulled-right'> Créé le <Moment unix format='DD/MM/YYYY à HH:SS'>{nodeById.created}</Moment>, par {nodeById.entityOwner.name}</div>
          <div className='content has-text-justified' >
            <h1 className='title '> {nodeById.title}</h1>
            <div dangerouslySetInnerHTML={{__html: nodeById.content.processed}} />
          </div>
        </div>

      </section>
    </div>
  }
  return <div>Loading...</div>
}

export const news = gql`

  query news($nid:String!) {
    nodeById(id: $nid) {
      ... on NodeNews {
        title
        entityOwner {
          name
        }
        created,
        content:fieldNewsContent{
          processed
        }
        image:fieldNewsImage{
          mobile:derivative(style:crop_5_1_705x141){
            url
          }
          desktop:derivative(style:crop_5_1_960x192){
            url
          }
          widescreen:derivative(style:crop_5_1_1155x231){
            url
          }
          fullhd:derivative(style:crop_5_1_1345x269){
            url
          }
        }
      }
    }
  }

`

NewsContent.propTypes = {
  data: PropTypes.object
}

export default graphql(news, {
  options: ({ nid }) => ({ variables: { nid } })
})(NewsContent)
