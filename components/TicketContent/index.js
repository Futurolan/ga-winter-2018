import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

function TicketContent ({ data: { loading, error, node } }) {
  console.log(node)
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement de la billeterie
      !!!</div>
  }

  if (node.url) {
    return <div className='ga-ticket-content' >
      <iframe
        src={node.url}
        resize='1' height='255px' width='100%' hidepoweredby='0' frameBorder='0' scrolling='auto' />
    </div>
  }
  return <div className='notification'>Chargement de la billeterie en cours.</div>
}

export const edition = gql`
query{
  node:nodeById(id:"${process.env.EDITION_ID}") {
    ... on NodeEdition {
      url:fieldEditionWeezeventUrl
    }
  }
}
`

TicketContent.propTypes = {
  data: PropTypes.object
}

export default graphql(edition)(TicketContent)
