const base = {
  name: 'Mokkapps',
  url: 'https://github.com/Mokkapps/website',
  desc: 'Portfolio website from Michael Hoffmann',
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - ${base.desc}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.desc}`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: `${base.desc}`,

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  quote:
    'Passionate software developer with focus on web-based technologies.',

  characteristics: [
    { text: 'Mobile,\n Game &\n Frontend Developer', icon: 'code' },
    { text: 'Blogger', icon: 'file-text' },
    { text: 'Video Game\n Enthusiast', icon: 'monitor' },
    { text: 'Beekeeper', icon: 'info' },
  ],

  projects: [
    {
      title: 'Supermarket Challenge',
      description: {
        short:
          'Supermarket Challenge is an iOS & Android smartphone game which delivers an addictive gameplay experience',
        long: `
        Challenge yourself and try to sustain at the supermarket cash register. Set a high score and share it with your friends for a new challenge.

        Alternatively you can try one of the 12 levels to get a better gameplay feeling.
        
        You have to scan articles, enter the correct barcode for fruits and throw bombs away before they explode.
        
        Surprise boxes can include useful extras or have a negative surprise for you. 
        
        Be careful! Unscanned articles in the shopping basket or articles which are thrown out of the screen, cost a life. You have three lifes per round.`,
      },
      usedTechnologies: ['Corona SDK'],
      imageName: 'supermarket-challenge',
      urls: {
        page: '/supermarket-challenge',
        googlePlay:
          'https://play.google.com/store/apps/details?id=de.mokkapps.supermarketchallenge',
        appStore:
          'https://itunes.apple.com/de/app/supermarket-challenge/id1207665675',
      },
      featured: true,
    },
    {
      title: 'Standup Picker',
      description: {
        short:
          'A desktop application which can be used in Scrum teams to initiate the daily Scrum meeting',
        long: '',
      },
      usedTechnologies: ['Angular 5, Electron'],
      imageName: 'standup-picker',
      urls: {
        page: '/standup-picker',
        github: 'https://github.com/Mokkapps/scrum-daily-standup-picker',
      },
      featured: true,
    },
    {
      title: 'RebelGamer Mobile App',
      description: {
        short: 'iOS & Android app for the gaming blog www.rebelgamer.de',
        long: '',
      },
      usedTechnologies: ['React Native'],
      imageName: 'rebelgamer',
      urls: {
        page: '/rebelgamer',
        github: 'https://github.com/Mokkapps/rebelgamer-mobile-app',
        googlePlay:
          'https://play.google.com/store/apps/details?id=de.rebelgamer.RebelGamerRSS',
        appStore:
          'https://itunes.apple.com/de/app/rebelgamer-news-fur-gamer/id1187403828',
      },
      featured: true,
    },
    {
      title: 'GitHub Traffic Viewer',
      description: {
        short:
          'A website which shows a list of traffic graphs of your own GitHub repositories',
        long: '',
      },
      usedTechnologies: ['Gatsby.js, Firebase'],
      imageName: 'github-traffic-viewer',
      urls: {
        github: 'https://github.com/Mokkapps/github-traffic-viewer-website',
      },
    },
    {
      title: 'Void Fest 2018 Band Reminder',
      description: {
        short:
          'Web application which can be used to subscribe for push notifications which will inform 30 minutes before a band will play on the music festival Void Fest 2018',
        long: '',
      },
      usedTechnologies: ['React.js, Node.js'],
      imageName: 'void-fest-band-reminder',
      urls: {
        github: 'https://github.com/Mokkapps/void-fest-pwa',
      },
    },
  ],

  publications: [
    {
      type: 'talk',
      title:
        'CoffeeTalk jambit 2016: Unity – Eine Einführung in die Cross-Plattform-Spieleentwicklung',
      link:
        'https://jambit.com/aktuelles/veranstaltungen/coffeetalks-april-2016/',
    },
    {
      type: 'talk',
      title: 'CoffeeTalk jambit 2017: Reactive Programming',
      link:
        'https://www.jambit.com/en/latest-info/events/coffeetalks-june-2017/',
    },
    {
      type: 'talk',
      title: 'Abendvortrag jambit 2018: Mein erstes Smartphone-Spiel',
      link: 'https://www.mokkapps.de/talks/my-first-smartphone-game/',
    },
    {
      type: 'article',
      title: 'ToiletPaper jambit 2016: Kotlin: Das bessere Java?',
      link:
        'https://www.jambit.com/aktuelles/toilet-papers/kotlin-das-bessere-java/',
    },
    {
      type: 'article',
      title:
        'Concept for an Intermodal Traveller Information System with Real-Time Data Using Complex Event Processing',
      link: 'https://ieeexplore.ieee.org/document/7313462/authors?reload=true',
    },
  ],

  skills: [
    { type: 'JavaScript', level: 90 },
    { type: 'TypeScript', level: 75 },
    { type: 'Java', level: 50 },
    { type: 'CSS', level: 80 },
    { type: 'HTML', level: 80 },
    { type: 'Angular', level: 80 },
    { type: 'React', level: 85 },
    { type: 'Node.js', level: 60 },
  ],
};

module.exports = config;
