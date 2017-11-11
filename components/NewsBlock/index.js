import React from 'react'

import NewsCard from 'components/NewsCard'

import stylesheet from './styles.scss'

const NewsBlock = () => (

  <section className='ga-news-block section'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='container'>
      <div className='columns is-6 is-variable'>
        <div className='column'>
          <NewsCard title='Ouikos, partenaire de la Gamers Assembly Halloween Edition !' imgUrl='https://halloween.gamers-assembly.net/sites/galloween/files/styles/crop_news/public/images/news/Header%20-%20r%C3%A9capGA.jpg?itok=uH8lSA2Q' />
        </div>
        <div className='column'>
          <NewsCard title='Les partenaires de la Gamers Assembly Halloween Edition' imgUrl='https://halloween.gamers-assembly.net/sites/galloween/files/styles/crop_news/public/images/news/Header_3.jpg?itok=AN-PtfFo' />
        </div>
        <div className='column'>
          <NewsCard title='Ajustement des slots et des cashprizes' imgUrl='https://halloween.gamers-assembly.net/sites/galloween/files/styles/crop_news/public/images/news/Header_2.jpg?itok=xp-Xt7Ro' />
        </div>
      </div>
    </div>
  </section>
)

export default NewsBlock
