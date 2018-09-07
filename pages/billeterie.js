import React from 'react'
import Layout from 'components/Layout'
import '../styles/styles.scss'
import TicketContent from '../components/TicketContent'

class BilleteriePage extends React.Component {
  render () {
    return (
      <Layout name='billeterie-page has-bg-star'>
        <section className='section'>
          <div className='container'>
            <TicketContent />
          </div>
        </section>
      </Layout>
    )
  }
}

export default BilleteriePage
