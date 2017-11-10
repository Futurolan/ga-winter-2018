import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'
import Hero from 'components/Hero'

class HomePage extends React.Component {
  render () {
    return (
      <Layout name='home-page'>
        <Hero />
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <div className='card bm--card-equal-height'>
                <div className='card-image'>
                  <figure className='image is-2by1'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content'>

                  <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card bm--card-equal-height'>
                <div className='card-image'>
                  <figure className='image is-2by1'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content'>

                  <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card bm--card-equal-height'>
                <div className='card-image'>
                  <figure className='image is-2by1'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content'>

                  <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    )
  }
}

export default withReduxSaga(HomePage)
