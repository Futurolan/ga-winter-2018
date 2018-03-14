import React from 'react'
import Layout from 'components/Layout'
import withData from 'lib/withData'
import Meta from 'components/Meta'

class InfosPage extends React.Component {
  render () {
    return (
      <Layout name='infos-page'>
        <Meta title='Informations pratiques' />
        <div className='section'>
          <div className='container'>
            <h1 className='title'>Informations pratiques</h1>
            //TODO les informations pratiques
          </div>
        </div>
      </Layout>
    )
  }
}

export default withData(InfosPage)
