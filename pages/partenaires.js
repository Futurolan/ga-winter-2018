import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../styles/styles.scss'

class PartenairesPage extends React.Component {
  render () {
    return (
      <Layout name='partenaires-page has-bg-star'>
        <div className='section'>
          <Meta title='Partenaires' />
          <div className='container'>
            <h1 className='title'>Partenaires</h1>
            //TODO la liste des partenaires
          </div>
        </div>
      </Layout>
    )
  }
}

export default PartenairesPage
