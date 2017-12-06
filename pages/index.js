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

import {makeHeroDisplay, makeHeroTitle, makeHeroSubTitle, makeHeroImgUrl, makeNews, makeCountdownDisplay, makeCountdownDate, makeCountdownText} from 'selectors/home'
import {getHome} from 'actions/home'

class HomePage extends React.Component {
  static getInitialProps ({ store, query }) {
    if (store.getState().getIn(['home', 'data']) === false) { store.dispatch(getHome(query.edition)) }
  }

  render () {
    const {heroDisplay, heroTitle, heroSubTitle, heroImgUrl, news, countdownDisplay, countdownDate, countdownText} = this.props
    return (
      <Layout name='home-page'>
        <div>
          {heroDisplay && <Hero title={heroTitle} subtitle={heroSubTitle} imgUrl={heroImgUrl} />}
          <Info />
          {countdownDisplay && <CountDown date={countdownDate} text={countdownText} />}
          <NewsBlock news={news} />
        </div>
      </Layout>
    )
  }
}

HomePage.propTypes = {
  heroDisplay: PropTypes.bool,
  heroTitle: PropTypes.string,
  heroSubTitle: PropTypes.string,
  heroImgUrl: PropTypes.string,
  news: PropTypes.object,
  countdownDisplay: PropTypes.bool,
  countdownDate: PropTypes.string,
  countdownText: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  heroDisplay: makeHeroDisplay(),
  heroTitle: makeHeroTitle(),
  heroSubTitle: makeHeroSubTitle(),
  heroImgUrl: makeHeroImgUrl(),
  news: makeNews(),
  countdownDisplay: makeCountdownDisplay(),
  countdownDate: makeCountdownDate(),
  countdownText: makeCountdownText()
})

export default withReduxSaga(connect(mapStateToProps)(HomePage))
