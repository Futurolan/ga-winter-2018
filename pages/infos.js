import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import InfosContent from 'components/InfosContent'
import '../styles/styles.scss'

class InfosPage extends React.Component {
  render () {
    return (
      <Layout name='infos-page has-bg-star'>
        <div className='section'>
          <Meta title='Informations pratiques' />
          <div className='container'>
            <h1 className='title title-line has-text-centered'><span>Informations pratiques</span></h1>
            <InfosContent />
          </div>
        </div>
      </Layout>
    )
  }
}

export default InfosPage
