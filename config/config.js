let config = {
  title: 'Gamers Assembly : Winter Edition 2018',
  logo: `/static/img/logo-100x100.png`,
  description: 'L\'édition 2018 de la Gamers Assembly Winter Edition aura lieu du 1er au 2 décembre. À la Salle de l\'Agora - Jaunay-Marigny (86).',
  metaImage: `${process.env.BASE_URL}/static/img/logo-200x200.png`,
  gaTrackingId: 'UA-128777022-4',
  mainPartner: {
    logo: '/static/img/logoJM106.png',
    url: 'http://www.jaunay-marigny.fr/'
  },
  home: {
    banner: '/static/img/bg-winter-v1.png',
    twitterAccount: 'GamersAssembly'
  },
  news: {
    active: true,
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly Winter Edition 2018'
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la GAMERS ASSEMBLY 2018, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  partners: {
    active: true,
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires'
  },
  tournaments: {
    active: true,
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly Winter Edition 2018'
  },
  info: {
    active: true,
    title: 'Informations pratiques',
    description: 'Toutes les informations sur cet évènement'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly Winter Edition 2018'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: false,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan'
  }
}

module.exports = config
