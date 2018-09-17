const base = {
  name: 'Mokkapps',
  url: 'https://www.mokkapps.de',
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

  socialLinks: [
    { url: 'https://github.com/mokkapps', icon: 'github' },
    { url: 'https://twitter.com/mokkapps', icon: 'twitter' },
    { url: 'https://dev.to/mokkapps', icon: 'dev-dot-to' },
    {
      url: 'https://www.linkedin.com/in/michael-hoffmann-3b8933b1',
      icon: 'linkedin',
    },
  ],

  quote: 'Passionate software developer with focus on web-based technologies',

  characteristics: [
    {
      text: 'Software Engineer',
      description: 'I love coding mobile apps, games and websites',
      icon: 'code',
      link: '/projects',
    },
    {
      text: 'Blogger',
      description: 'I write about software development',
      icon: 'file-text',
      link: '/blog',
    },
    {
      text: 'Video Gamer',
      description: 'I love to play video games on PC and PS4',
      icon: 'monitor',
    },
    { text: 'Beekeeper', description: 'I love nature and bees', icon: 'info' },
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
      usedTechnologies: [
        { name: 'Corona SDK' },
        { icon: 'ios' },
        { icon: 'android' },
      ],
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
      usedTechnologies: [{ name: 'Electron' }, { icon: 'angular' }],
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
      usedTechnologies: [
        { name: 'React-Native' },
        { icon: 'react' },
        { icon: 'ios' },
        { icon: 'android' },
      ],
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
      title: 'Parents Soundboard',
      description: {
        short:
          'A soundboard developed for parents to be able to play often needed phrases like "No"',
        long: '',
      },
      usedTechnologies: [
        { name: 'React-Native' },
        { icon: 'react' },
        { icon: 'ios' },
        { icon: 'android' },
      ],
      imageName: 'parents-soundboard',
      urls: {
        page: '/parents-soundboard',
        github: 'https://github.com/Mokkapps/parents-soundboard',
        googlePlay:
          'https://play.google.com/store/apps/details?id=de.mokkapps.parentssoundboard',
        appStore:
          'https://itunes.apple.com/us/app/parents-soundboard/id1434425575',
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
      usedTechnologies: [{ name: 'Gatsby.js, Firebase' }, { icon: 'react' }],
      imageName: 'github-traffic-viewer',
      urls: {
        page: 'https://github-traffic-viewer.netlify.com/',
        github: 'https://github.com/Mokkapps/github-traffic-viewer-website',
      },
    },
    {
      title: 'Privatimkerei Hoffmann Website',
      description: {
        short:
          'Website for our family-run honey farm',
        long: '',
      },
      usedTechnologies: [{ name: 'Gatsby.js' }, { icon: 'react' }],
      imageName: 'privatimkerei-hoffmann',
      urls: {
        page: 'https://privatimkerei-hoffmann.de/',
        github: 'https://github.com/Mokkapps/imkerei-hoffmann-website',
      },
    },
    {
      title: 'Void Fest 2018 Band Reminder',
      description: {
        short:
          'Web application which can be used to subscribe for push notifications which will inform 30 minutes before a band will play on the music festival Void Fest 2018',
        long: '',
      },
      usedTechnologies: [{ icon: 'react' }, { icon: 'node' }],
      imageName: 'void-fest-band-reminder',
      urls: {
        page: 'https://void-fest-app.netlify.com/',
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
    { type: 'JavaScript', icon: 'js', level: 'expert' },
    { type: 'TypeScript', icon: 'typescript', level: 'advanced' },
    { type: 'Java', icon: 'java', level: 'intermediate' },
    { type: 'CSS3', icon: 'css3', level: 'advanced' },
    { type: 'HTML5', icon: 'html', level: 'advanced' },
    { type: 'Angular', icon: 'angular', level: 'advanced' },
    { type: 'React', icon: 'react', level: 'advanced' },
    { type: 'Node.js', icon: 'node', level: 'intermediate' },
  ],
};

module.exports = config;
