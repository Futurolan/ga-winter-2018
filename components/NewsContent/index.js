import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import stylesheet from './styles.scss'
import Moment from 'react-moment'
import Meta from 'components/Meta'

function NewsContent ({data: { loading, error, node }}) {
  if (error) return <div>Error Loading News</div>

  if (node) {
    return <div className='ga-news-content'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Meta title={node.title} image={node.image.fullhd.url} description={node.description}/>
      <section className='section'>

        <div className='container'>
          <figure className='image is-5by1'>
            <img srcSet={`${node.image.mobile.url} 705w, ${node.image.desktop.url} 960w, ${node.image.widescreen.url} 1155w, ${node.image.fullhd.url} 1345w`} />
          </figure>
          <div className='is-pulled-right'> Créé le <Moment unix format='DD/MM/YYYY à HH:SS'>{node.created}</Moment>, par {node.entityOwner.name}</div>
          <div className='content has-text-justified' >
            <h1 className='title '> {node.title}</h1>
            <div dangerouslySetInnerHTML={{__html: node.content.processed}} />
          </div>
        </div>

      </section>
    </div>
  }
  return <div>Loading...</div>
}

export const news = gql`

  query news($nid:String!) {
    node:nodeById(id: $nid) {
      ... on NodeNews {
        title
        entityOwner {
          name
        }
        created,
        content:fieldNewsContent{
          processed
        }
        description:fieldNewsDescription
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
