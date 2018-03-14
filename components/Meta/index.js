import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = (props) => {
  const title = props.title ? `${props.title} | Galloween 2018` : 'Galloween 2018'
  const description = props.description ? props.description : 'Retrouvez la Gamers Assembly Halloween Edition 2018"'
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='image' content={`${process.env.BASE_URL}/static/img/logo.png`} />
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={`${process.env.BASE_URL}/static/img/logo.png`} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={`${process.env.BASE_URL}/static/img/logo.png`} />
      {/* <meta name='og:url' content={window.location.href} /> */}
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='fr_FR' />
      <meta name='og:type' content='website' />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

export default Meta
