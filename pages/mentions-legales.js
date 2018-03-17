import React from 'react'
import Layout from 'components/Layout'
import withData from 'lib/withData'
import Meta from 'components/Meta'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='contacts-page'>
        <Meta title='Mentions légales' />
        <div className='section'>
          <div className='container'>
            <div className='content'>
              <p>
                <em>(en respect de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique)</em>
              </p>

              <h2>Edition / Conception</h2>
              <p>
                Le site internet www.gamers-assembly.net est publié par :
              </p>
              <p>
                Association FuturoLAN - <em>Association de type Loi 1901</em><br />
                11, rue Paul Gauvin<br />
                86 280 Saint Benoît<br />
                France<br />
                05 49 45 00 89<br />
                <a href='contact@futurolan.net'>Contact mail</a>
              </p>
              <p>
              N° SIRET : 44305811000026
              </p>
              <p>
                Président : <a href='mailto:vince@futurolan.net'>Vincent Colas</a><br />
                Responsable de la publication : <a href='mailto:vince@futurolan.net'>Vincent Colas</a><br />
                Réalisation du site : Association FuturoLAN<br />
                Webmaster : <a href='mailto:pierrelouis.dessuges@futurolan.net'>Pierre-Louis Dessuges</a>
              </p>
              <h2>Hébergement</h2>
              <p>
              OVH<br />
              2 rue Kellermann<br />
              59100 Roubaix
              </p>
              <h2>Copyright et logo</h2>
              <p>
              Les droits d'auteur rattachés au contenu affiché sur le site www.gamers-assembly.net appartiennent à l'association FuturoLAN ou à des tiers propriétaires du contenu.
              </p>
              <p>
              Le logo GA a été créé par Benoît Clair et les droits d'utilisation sont la propriété de l'Association FuturoLAN.
              </p>
              <p>
              Aucun contenu de ce site ne peut être copié, reproduit, distribué, republié, téléchargé, affiché, publié ou transmis sous quelque forme ou par quelque moyen que ce soit sans la permission de FuturoLAN ou des tiers propriétaires du contenu.
              </p>
              <p>
              En l'absence d'autorisation, tout acte sera susceptible de constituer une violation des lois relatives à la propriété intellectuelle.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withData(ContactsPage)
