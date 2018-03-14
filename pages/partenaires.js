import React from 'react'
import Layout from 'components/Layout'
import withData from 'lib/withData'
import Meta from 'components/Meta'

class PartenairesPage extends React.Component {
  render () {
    return (
      <Layout name='partenaires-page'>
        <Meta title='Partenaires' />
        <div className='section'>
          <div className='container'>
            <h1 className='title'>Partenaires</h1>
            //TODO la liste des partenaires
          </div>
        </div>
      </Layout>
    )
  }
}

export default withData(PartenairesPage)
