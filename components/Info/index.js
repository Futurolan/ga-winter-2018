import React from 'react'
import stylesheet from './styles.scss'

const Info = (props) => (
  <section className='ga-info'>
    <style dangerouslySetInnerHTML={{__html: stylesheet}} />
    <div className='container has-text-centered'>
      <figure className='image is-128x128'>
        <img src='/static/img/logo.png' />
      </figure>
      <p className='content is-size-4' >
            La gamers assembly est la plus grosse compétition de jeux vidéo française.
      </p>
    </div>
  </section>
)

export default Info
