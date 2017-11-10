import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'

class HomePage extends React.Component {
  render () {
    return (
      <Layout>
        <div id='home-page'>
          <section className='section'>
            <div className='container' />
          </section>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(HomePage)
