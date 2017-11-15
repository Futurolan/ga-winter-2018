import React from 'react'
import {withReduxSaga} from 'configureStore'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import Hero from 'containers/Hero'
import NewsBlock from 'components/NewsBlock'
import InfoBlock from 'components/InfoBlock'

import {makeHeroDisplay, makeHeroTitle, makeHeroSubTitle, makeHeroImgUrl} from 'selectors/home'
import {getHome} from 'actions/home'

class HomePage extends React.Component {
  static getInitialProps ({ store, query }) {
    if (store.getState().getIn(['home', 'data']) === false) { store.dispatch(getHome(query.edition)) }
  }

  render () {
    const {heroDisplay, heroTitle, heroSubTitle, heroImgUrl} = this.props
    return (
      <Layout name='home-page'>
        <div>
          {heroDisplay && <Hero title={heroTitle} subtitle={heroSubTitle} imgUrl={heroImgUrl} />}
          <InfoBlock />
          <NewsBlock />
        </div>
      </Layout>
    )
  }
}

HomePage.propTypes = {
  heroDisplay: PropTypes.bool,
  heroTitle: PropTypes.string,
  heroSubTitle: PropTypes.string,
  heroImgUrl: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  heroDisplay: makeHeroDisplay(),
  heroTitle: makeHeroTitle(),
  heroSubTitle: makeHeroSubTitle(),
  heroImgUrl: makeHeroImgUrl()
})

export default withReduxSaga(connect(mapStateToProps)(HomePage))
