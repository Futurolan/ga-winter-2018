import React from 'react'

import withData from 'lib/withData'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import HomeNewsList from 'components/HomeNewsList'
import HomeInfoBlocks from 'components/HomeInfo'
import Meta from 'components/Meta'

class HomePage extends React.Component {
  render () {
    return (
      <Layout name='home-page'>
        <div>
          <Meta title='Accueil' />
          <Hero title={'Galloween 2018'} subtitle={'Venez frémir avec nous le 31 octobre 2018 '} imgUrl={'/static/img/bg-home-blue-area.jpg'} />
          <section className='section is-medium'>
            <div className='container'>
              <HomeInfoBlocks />
            </div>
          </section>
          <section className='section'>
            <div className='container'>
              <HomeNewsList />
            </div>
          </section>
          {/* <PartnersCarousel /> */}
        </div>
      </Layout>
    )
  }
}

export default withData(HomePage)
