import React from 'react'
import {withReduxSaga} from 'configureStore'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import NewsBlock from 'components/NewsBlock'
import InfoBlock from 'components/InfoBlock'

import {makeHeroTitle, makeHeroSubTitle, makeHeroImgUrl} from 'selectors/config'
import {getConfig} from 'actions/config'

class HomePage extends React.Component {
  static getInitialProps ({ store }) {
    if (store.getState().getIn(['config', 'data']) === false) { store.dispatch(getConfig()) }
  }

  render () {
    const {heroTitle, heroSubTitle, heroImgUrl} = this.props
    return (
      <Layout name='home-page'>
        <div>
          <Hero title={heroTitle} subtitle={heroSubTitle} imgUrl={heroImgUrl} />
          <InfoBlock />
          <NewsBlock />
        </div>
      </Layout>
    )
  }
}

HomePage.propTypes = {
  heroTitle: PropTypes.string,
  heroSubTitle: PropTypes.string,
  heroImgUrl: PropTypes.string
}
const mapStateToProps = createStructuredSelector({
  heroTitle: makeHeroTitle(),
  heroSubTitle: makeHeroSubTitle(),
  heroImgUrl: makeHeroImgUrl()
})

export default withReduxSaga(connect(mapStateToProps)(HomePage))
