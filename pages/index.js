import React from 'react'

import withData from 'lib/withData'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import HomeNews from 'components/HomeNews'
// import CountDown from 'components/CountDown'
import Info from 'components/Info'
// import PartnersCarousel from 'components/PartnersCarousel'

class HomePage extends React.Component {
  render () {
    return (
      <Layout name='home-page'>
        <div>
          <Hero title={'Galloween 2018'} subtitle={'Venez frémir avec nous le 31 octobre 2018 '} imgUrl={'/static/img/bg-home-blue-area.jpg'} />
          <Info />
          {/* <CountDown date={'2019-03-04T22:33:05.797Z'} text={'Un texte ici'} /> */}
          <HomeNews />
          {/* <PartnersCarousel /> */}
        </div>
      </Layout>
    )
  }
}

export default withData(HomePage)
