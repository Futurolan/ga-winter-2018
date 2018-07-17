import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../styles/styles.scss'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='contacts-page has-bg-star'>
        <Meta title='Contacts' />
        <div className='section'>
          <div className='container'>
            <h1 className='title'>Contacts</h1>
            <div className='columns'>
              <div className='column'>
                <h2 className='subtitle'>Emails</h2>
                <ul>
                  <li><a href='mailto:contact@futurolan.net'>Informations diverses</a></li>
                  <li><a href='mailto:inscriptions@futurolan.net'>Inscriptions</a></li>
                  <li><a href='mailto:tournois@futurolan.net'>Tournois</a></li>
                  <li><a href='mailto:partners@futurolan.net'>Sponsoring</a></li>
                  <li><a href='mailto:mediacom@futurolan.net'>Communication et médias sociaux</a></li>
                  <li><a href='mailto:mediacom@futurolan.net'>Presse</a></li>
                  <li><a href='https://festival.gamers-assembly.net/pages/recrutement-2018' target='_self'>Recrutement</a></li>
                </ul>
              </div>
              <div className='column' >
                <h2 className='subtitle'>Adresse</h2>
                <p>
                  Association FuturoLAN<br />
                  11, rue Paul Gauvin<br />
                  86280 St Benoit<br />
                  France<br />
                  Tel : <a href='tel:+33 5 49 45 00 89'>+33 5 49 45 00 89</a><br />
                  Fax : <a href='tel:+33 9 72 22 66 58'>+33 9 72 22 66 58</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactsPage
