import React from 'react'
import Layout from 'components/Layout'
import '../styles/styles.scss'
import PageContent from 'components/PageContent'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='contacts-page has-bg-star'>
        <section className='section'>
          <div className='container'>
            <PageContent nid={process.env.CONTACT_PAGE_ID} />
          </div>
        </section>
      </Layout>
    )
  }
}

export default ContactsPage
