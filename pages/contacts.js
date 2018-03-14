import React from 'react'
import Layout from 'components/Layout'
import withData from 'lib/withData'
import Meta from 'components/Meta'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='contacts-page'>
        <Meta title='Contacts' />
        <div className='section'>
          <div className='container'>
            <h1 className='title'>Contacts</h1>
            //TODO page contact
          </div>
        </div>
      </Layout>
    )
  }
}

export default withData(ContactsPage)
