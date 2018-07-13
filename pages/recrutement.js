import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import './styles.scss'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='recrutement-page'>
        <Meta title='Recrutement' />
        <div className='section'>
          <div className='container'>
            <div className='content'>
              <iframe frameBorder='0' height='1750' src='https://goo.gl/forms/84pHQfSp50RcuUel2' width='100%'>Chargement en cours...</iframe>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactsPage
