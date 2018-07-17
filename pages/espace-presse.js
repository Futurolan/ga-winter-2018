import React from 'react'
import Layout from 'components/Layout'
import PageContent from 'components/PageContent'
import '../styles/styles.scss'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='espace-presse-page has-bg-star'>
        <div className='section'>
          <div className='container'>
            <PageContent nid={process.env.PRESSE_PAGE_ID} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactsPage
