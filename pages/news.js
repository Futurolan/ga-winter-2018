import React from 'react'
import Layout from 'components/Layout'
import NewsList from 'components/NewsList'
import Meta from 'components/Meta'
import '../styles/styles.scss'

class NewsPage extends React.Component {
  render () {
    return (
      <Layout name='news-page'>
        <Meta title='Actualités' description="Toute l'actualité de la lan" />
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

export default NewsPage
