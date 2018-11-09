let config = {
  title: 'Gamers Assembly : Halloween Edition 2018',
  logo: `/static/img/logo-orange-100x100.png`,
  description: 'L\'édition 2018 de la Gamers Assembly Halloween Edition aura lieu du 10 au 11 novembre à la salle de spectacle de la Hune - Saint-Benoît (86)',
  metaImage: `${process.env.BASE_URL}/static/img/logo-orange-200x200.png`,
  gaTrackingId: 'UA-128777022-2',
  mainPartner: {
    logo: '/static/img/logo_st_benoit.jpg',
    url: 'http://www.ville-saint-benoit.fr/'
  },
  home: {
    banner: '/static/img/bg-halloween-v1.png',
    twitterAccount: 'GamersAssembly'
  },
  news: {
    active: true,
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly Halloween Edition 2018'
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la Gamers Assembly, c\'est par ici !!!',
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
    description: 'Tous les tournois de la Gamers Assembly Halloween Edition 2018'
  },
  info: {
    active: true,
    title: 'Informations pratiques',
    description: 'Toutes les informations sur cet évènement'
  },
  live: {
    active: true,
    title: 'Live',
    description: 'Tous les streams et résultats en direct'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly Halloween Edition 2018'
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
