import React from 'react'
import {withReduxSaga} from 'configureStore'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import NewsBlock from 'components/HomeNews'
import CountDown from 'components/CountDown'
import Info from 'components/Info'
import PartnersCarousel from 'components/PartnersCarousel'

import {makeNews} from 'selectors/home'
import {getHome} from 'actions/home'

class HomePage extends React.Component {
  static getInitialProps ({ store, query }) {
    if (store.getState().getIn(['home', 'data']) === false) { store.dispatch(getHome(query.edition)) }
  }

  render () {
    const {news} = this.props
    return (
      <Layout name='home-page'>
        <div>
          <Hero title={'Galloween 2018'} subtitle={'Venez frémir avec nous le 31 octobre 2018 '} imgUrl={'/static/img/bg-home-blue-area.jpg'} />
          <Info />
          <CountDown date={'2019-03-04T22:33:05.797Z'} text={'Un texte ici'} />
          <NewsBlock news={news} />
          <PartnersCarousel />
        </div>
      </Layout>
    )
  }
}

HomePage.propTypes = {
  news: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  news: makeNews()
})

export default withReduxSaga(connect(mapStateToProps)(HomePage))
