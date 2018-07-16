import React from 'react'

import Layout from 'components/Layout'
import NewsContent from 'components/NewsContent'
import PropTypes from 'prop-types'
import '../styles/styles.scss'

class NewsPage extends React.Component {
  static getInitialProps ({ query: { nid } }) {
    return { nid: nid }
  }

  render () {
    const {nid} = this.props
    return (
      <Layout name='news-single-page'>
        <NewsContent nid={nid} />
      </Layout>
    )
  }
}
NewsPage.propTypes = {
  nid: PropTypes.Number
}

export default NewsPage
