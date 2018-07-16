import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../styles/styles.scss'

class BilleteriePage extends React.Component {
  render () {
    return (
      <Layout name='billeterie-page'>
        <Meta title='Billeterie' />
        <div className='section'>
          <div className='container'>
            <h1 className='title'>Billeterie</h1>
            //TODO La page billeterie
          </div>
        </div>
      </Layout>
    )
  }
}

export default BilleteriePage
