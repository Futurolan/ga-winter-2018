import React from 'react'
import Layout from 'components/Layout'
import withData from 'lib/withData'
import NewsList from 'components/NewsList'
import Meta from 'components/Meta'

class NewsPage extends React.Component {
  render () {
    return (
      <Layout name='news-page'>
        <Meta title='Actualités' />
        <div className='section'>

          <div className='container'>
            <h1 className='title'>Actualités</h1>
            <NewsList />
          </div>
        </div>
      </Layout>
    )
  }
}

export default withData(NewsPage)
