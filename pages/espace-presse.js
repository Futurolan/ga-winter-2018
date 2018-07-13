import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'

class ContactsPage extends React.Component {
  render () {
    return (
      <Layout name='espace-presse-page'>
        <Meta title='Accreditation Presse' />
        <div className='section'>
          <div className='container'>
            <div className='content' >
              <h1 className='title'>Accreditation Presse</h1>
              <div className='notification has-text-centered'>
              La Gamers Assembly est le plus important rassemblement de passionnés de sport électronique de France et un des plus médiatisés.<br />
              Il est également le rendez-vous des gamers hexagonaux ; avec plus de 100 journalistes qui couvrent l’événement chaque année.
              </div>

              {/* Infos pratiques */}
              <h2 className='subtitle'>Infos pratiques</h2>
              <div className='columns'>
                <div className='column is-one-quarter-tablet'>
                  <p className='has-text-centered has-text-left-tablet'>
                  Parc des Expositions de Poitiers<br />
                  11 rue Salvador Allende<br />
                  83000 Poitiers<br />
                  </p>
                </div>
                <div className='column'>
                  <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.227389797712!2d0.37155831594861577!3d46.58274197913012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe97064a38c7%3A0xcf51cacab6eb14ac!2sParc+des+Expositions+de+Grand+Poitiers!5e0!3m2!1sfr!2sfr!4v1521322098713' width='100%' height='450' frameBorder='0' allowFullScreen />
                </div>
              </div>

              {/* Accreditations */}
              <h2 className='subtitle'>Accreditations</h2>
              <p>
              Toute personne âgée de plus de 16 ans répondant à l’une des catégories listées plus bas peut s’enregistrer à l’événement en tant que journaliste.<br />
              L’attribution de chaque accréditation est soumise à l’approbation du responsable au sein du staff de la Gamers Assembly.
              </p>
              <p>
                <a href='https://goo.gl/forms/GSSDkSwkTNUsv1xl2' className='button'>Formulaire d'accreditation</a>
              </p>
              <p>
                <strong>Les accréditations presse sont à venir retirer à l’accueil de la manifestation.</strong>
              </p>
              <p>
              Un poste d’accueil réservé à la presse est ouvert du vendredi soir au samedi après-midi. Vous y accèderez par l’entrée principale en empruntant la file réservée.<br />
              L’accès « presse » à la manifestation est caractérisé par le port d’un badge autour du coup et d’un bracelet de couleur indéchirable autour du poignet. Tous les journalistes accrédités doivent garder en tout temps ces deux traits caractéristiques sur eux tant qu’ils seront présents à l’évènement.
              Ne pas jeter, détériorer, détruire, ces gages de vos privilèges si vous prévoyez de rentrer à nouveau à l’évènement.
              </p>
              <p>
              L’accès « presse » permet aux journalistes accrédités de se déplacer librement dans l’ensemble des zones privées &amp; publiques de l’événement à l’exception des zones dites de « backstage » réservées au staff de la manifestation. En cas de besoin d’accès spécifique à l’une de ces zones, merci de
              contacter l’équipe presse en amont de l’évènement.
              </p>
              <p>
              Ne peuvent obtenir d’accréditation presse, que des journalistes travaillant effectivement à la couverture médiatique de la manifestation.
              </p>
              <p>
              Choisissez la catégorie qui vous correspond et consultez les conditions d’accréditation presse qui vous concernent :
                <ul>
                  <li>Presse online et offline</li>
                  <li>Journalistes freelance & blogueurs</li>
                  <li>Projet étudiants, recherches & enquêtes non-commerciales</li>
                  <li>Streamers, shoutcasters</li>
                </ul>
              </p>
              <p>
                <strong>Si vous êtes un journaliste ne rentrant pas dans une de ces catégories, contactez notre attachée de presse.</strong>
              </p>
              <p>
                <strong>Astuces pour vous permettre d'obtenir votre accréditation rapidement :</strong>
                <ul>
                  <li>Lisez attentivement la procédure d’accréditation correspondant à votre situation</li>
                  <li>Ne vous y prenez pas au dernier moment</li>
                  <li>Vérifiez bien la date limite d’envoi de votre demande</li>
                  <li> en compte le délai de réponse à votre demande d’accréditation</li>
                  <li>Attendez l’approbation de votre demande avant d’engager vos frais de déplacement</li>
                  <li>Remplissez correctement tous les champs du formulaire : un lien ou mail mort engendrera un refus systématique</li>
                </ul>
              </p>
              <p>
                <strong>Le délai d’attribution des accréditations presse est variable. Merci de ne remplir le formulaire qu’une seule fois par personne. En cas de doute ou de questions, n’hésitez pas à contacter l’équipe presse.</strong>
              </p>
              <p>
              Contactez-nous au plus vite pour tout changement de situation ou annulation de votre accréditation presse en vous référant à la rubrique contact en bas de page.
              </p>

              {/* Presse online et offline */}
              <h2 className='subtitle'>Presse online et offline</h2>
              <p>
            Tout journaliste travaillant pour une rédaction ou un site internet traitant de sujets sur les jeux vidéo, les nouvelles technologies et les loisirs numériques.
              </p>
              <p>
            Tout journaliste travaillant pour une rédaction spécialisée dans le sport électronique également appelé « esport ».
              </p>
              <p>
            Afin d’éviter les fraudes, les documents suivants pourront vous être demandés afin de retirer votre badge : carte nationale d’identité / permis de conduire / passeport
              </p>
              <p>
            Le nombre de places est limité à 2 journalistes maximum par rédaction.
              </p>

              {/* Journalistes freelance & blogueurs */}
              <h2 className='subtitle'>Journalistes freelance & blogueurs</h2>
              <p>
              Tout journaliste indépendant travaillant pour son propre compte, au travers d’un site internet ou d’un blog, à titre professionnel ou amateur.
              </p>
              <p>
              Afin d’éviter les fraudes, les documents suivants pourront vous être demandés afin de retirer votre badge : carte nationale d’identité / permis de conduire / passeport
              Le nombre de places est limité à 1 personne maximum par média.
              </p>

              {/* Projets etudiants, recherches & enquetes non-commerciales */}
              <h2 className='subtitle'>Projets etudiants, recherches & enqu&ecirc;tes non-commerciales</h2>
              <p>
                Tout étudiant ou chercheur souhaitant effectuer des recherches, sondages ou observations, pendant la Gamers Assembly.
              </p>
              <p>
                Toute personne souhaitant profiter du cadre proposé par la manifestation pour effectuer des recherches, sondages ou observations dans un but professionnel strictement non-commercial.
              </p>
              <p>
                Afin d’éviter les fraudes, les documents suivants pourront vous être demandés afin de retirer votre badge : carte nationale d’identité / permis de conduire / passeport.<br />
                Nous avons à cœur de vous aider à réaliser vos projets étudiants ou professionnels et serions heureux de vous accueillir ! Afin d’obtenir votre accréditation contactez directement le responsable des accréditations presse par email.
              </p>
              <p>
                Votre contact : à venir
              </p>
              <p>
                <strong>Merci de communiquer les informations suivantes dans votre email de contact :</strong>
                <ul>
                  <li>Nom</li>
                  <li>Prénom</li>
                  <li>Type de recherche / enquête</li>
                  <li>Présentation de vos travaux / Présentation de votre projet</li>
                  <li>Mail et téléphone de contact</li>
                  <li>Vos qualifications ou votre cursus universitaire en cours</li>
                  <li> Dates de présence (si possible)</li>
                  <li>Noms, prénoms, rôles de chaque personne à accréditer (si vous n'êtes pas seul)</li>
                  <li>Vos besoins spécifiques si vous en avez</li>
                  <li>Remarques/questions</li>
                </ul>
              </p>
              <p>
                Le nombre de places est limité à 2 à 3 personnes maximum par projet.
              </p>

              {/* Streamers & shoutcasters */}
              <h2 className='subtitle'>Streamers & shoutcasters</h2>
              <p>
                Afin d’éviter les fraudes, les documents suivants pourront vous être demandés afin de retirer votre badge : carte nationale d’identité / permis de conduire / passeport
              </p>
              <p>
                <a href='https://goo.gl/forms/GSSDkSwkTNUsv1xl2' className='button'>Formulaire d'accreditation</a>
              </p>

              {/* Informations complémentaires */}
              <h2 className='subtitle'>Informations complémentaires</h2>
              <p>
              Tous les journalistes ont accès à une connexion internet filaire dans l’espace presse qui leur est réservé. Dans la mesure du possible nous mettrons à votre disposition des bornes Wi-Fi disposées dans l’ensemble du bâtiment. Demandez vos accès Wi-Fi au responsable de la presse sur place ou adressez-vous à un agent d’accueil.
              </p>
              <p>
              Sauf demande orale d’un exposant (identifiable par son badge et son bracelet), les journalistes ont toute liberté de filmer et photographier les stands exposants pendant les heures d’ouverture au public de l’espace « salon ». En dehors de ces heures d’ouvertures l’accès à ces zones est restreint, voire interdit pour tous les journalistes.
              </p>
              <p>
              Les journalistes sont seuls responsables du matériel qu'ils apportent sur place. L’organisation ne peut être tenue pour responsable en cas de vol, perte ou détérioration de matériel laissé sans surveillance, même pour un court instant.
              </p>
              <p>
              Une fois retirée, l’accréditation presse n’est pas transférable. Pour être considéré comme journaliste, vous devez porter à la fois votre badge et votre bracelet. Une fois attaché le bracelet ne pourra pas être enlevé sans être déchiré. Les journalistes devront dormir et se laver avec ce bracelet, ce dernier est résistant à l’eau.
              </p>
              <p>
              Si vous vous rendez à la Gamers Assembly par les transports en commun et que vous avez beaucoup de matériel avec vous, nous vous proposons de venir vous chercher et de vous transporter gratuitement sur place avec tout votre équipement.
              </p>
              <p>
              Les navettes ALLER/RETOUR sont accessibles depuis et vers : la Gare de Poitiers et l’Aéroport de Poitiers. Réglez-les détails en contactant le responsable de la presse via le mail indiqué plus bas.
              </p>

              {/* Contacts */}
              <h2 className='subtitle'>Contacts</h2>
              <div className='columns'>
                <div className='column'>
                  <p>
                    <strong>Contact presse :</strong>
                  </p>
                  <p>
                  Soham ALLARD<br />
                  Agence Warning Up<br />
                  E-mail : s.allard@warningup.com<br />
                  Tel: +33.1.53.86.70.15<br /><br />

                  Mélanie MORGADO<br />
                  Agence Warning Up<br />
                  E-mail : m.morgado@warningup.com<br />
                  Tel: +33.1.53.85.88.03
                  </p>
                </div>
                <div className='column' >
                  <p>
                    <strong>Contact presse esport, étudiants, chercheurs et streamers :</strong>
                  </p>
                  <p>
                    Responsable médias esportifs<br />
                    Association Futurolan - 11, rue Paul Gauvin<br />
                    86280 Saint-Benoît<br />
                    E-mail : accreditations@futurolan.net
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactsPage
