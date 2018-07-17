import React from 'react'
import './styles.scss'

const HomeInfo = () => (
  <div className='ga-home-info'>
    <section className='section is-medium'>
      <div className='container'>

        <div className='columns is-variable is-8 is-centered'>
          <div className='column is-one-third has-text-centered'>
            <h3 className='title has-text-weight-bold has-text-white title-line'><span>Nouvelle édition</span></h3>
            <p className='content has-text-white'>
            La Gamers Assembly 2018 est de retour du 31 mars au 2 avril 2018 au Parc des Expositions de Poitiers !
            </p>
          </div>
          <div className='column is-one-third has-text-centered'>
            <h3 className='title has-text-weight-bold has-text-white title-line'><span>Inscriptions</span></h3>
            <p className='content has-text-white'>
            Les inscriptions pour la Gamers Assembly 2018 ouvriront le <b>22 décembre 2017 à 20h</b>
            </p>
          </div>
          <div className='column is-one-third has-text-centered'>
            <h3 className='title has-text-weight-bold has-text-white title-line '><span>Réseaux sociaux</span></h3>
            <p className='content has-text-white'>
            Rejoignez-nous !<br />
            Twitter : <a href=''>@GamersAssembly</a><br />
            Facebook : <a href=''>Gamers Assembly</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

)

export default HomeInfo
