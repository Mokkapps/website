const base = {
  twitterUsername: '@mokkapps',
  url: 'https://www.mokkapps.de',
  title: 'Senior Frontend Developer (Freelancer)',
  name: `Michael Hoffmann`,
  techFocus: 'Vue.js',
  techFocusDevIconName: 'vue'
};

const baseNameWithTitle = `${base.name} (Mokkapps) - ${base.title}`;

const config = {
  base,
  /* meta tags */
  descriptionEn: `${base.title} from Munich with focus on ${base.techFocus}`,
  descriptionDe: `${base.title} aus München mit Fokus auf ${base.techFocus}`,
  baseNameWithTitle: `${baseNameWithTitle}`,
  baseName: `${base.name}`,
  baseTitle: `${base.title}`,
  baseTechFocus: `${base.techFocus}`,
  baseDesc: `${base.descriptionEn}`,
  siteTitlePostfix: ` - ${baseNameWithTitle}`,
  siteDescription: `${base.descriptionEn}`,
  defaultSeoImage: `https://i.imgur.com/C8ZMquy.jpg`,

  /* site header */
  headerTitle: `${baseNameWithTitle}`,
  headerSubTitle: `${base.descriptionEn}`,

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  twitterUsername: `${base.twitterUsername}`,
  authorName: `${base.name}`,
  customers: [
    'VHV Allgemeine Versicherung',
    'ProSiebenSat.1 Tech',
    'Angular Architects',
    'Carl Zeiss Microscopy',
    'Audi Business Innovation',
    'BMW',
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
      usedTechnologies: ['Corona SDK', 'apple', 'android'],
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
      usedTechnologies: ['electron', 'angular'],
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
      usedTechnologies: ['react', 'apple', 'android'],
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
      usedTechnologies: ['react', 'apple', 'android'],
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
      usedTechnologies: ['gatsby', 'firebase', 'react'],
      imageName: 'github-traffic-viewer',
      urls: {
        page: 'https://github-traffic-viewer.netlify.com/',
        github: 'https://github.com/Mokkapps/github-traffic-viewer-website',
      },
    },
    {
      title: 'Privatimkerei Hoffmann Website',
      description: {
        short: 'Website for our family-run honey farm',
        long: '',
      },
      usedTechnologies: ['gatsby', 'react'],
      imageName: 'privatimkerei-hoffmann',
      urls: {
        page: 'https://privatimkerei-hoffmann.de/',
        github: 'https://github.com/Mokkapps/imkerei-hoffmann-website',
      },
    },
    {
      title: 'Gatsby Source Plugin For Imgur Albums',
      description: {
        short: 'A Gatsby source plugin which adds Imgur albums ',
        long: '',
      },
      usedTechnologies: ['gatsby', 'node'],
      urls: {
        page: 'https://github.com/mokkapps/gatsby-source-imgur-albums',
      },
    },
    {
      title: 'Void Fest 2018 Band Reminder',
      description: {
        short:
          'Web application which can be used to subscribe for push notifications which will inform 30 minutes before a band will play on the music festival Void Fest 2018',
        long: '',
      },
      usedTechnologies: ['react', 'node'],
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
      date: '11/2019',
      image: 'new-angular-project',
      host: 'Munich Frontend Meetup',
      title: 'How I Would Start A New Angular Project',
      link: 'https://www.meetup.com/de-DE/Munich-Frontend-Developers/events/265401762/',
      slides: 'https://www.slideshare.net/secret/47Wj9B5Is6Zch3',
    },
    {
      type: 'talk',
      date: '01/2019',
      image: 'website-engineering',
      host: 'Munich Frontend Meetup',
      title: 'The Engineering Behind My Portfolio Website',
      link: 'https://jambit.com/en/latest-info/events/meetup-munich-frontend-developers-2019/',
      slides: 'https://mokkapps-website-lightning-talk.netlify.com',
    },
    {
      type: 'talk',
      date: '02/2018',
      image: 'first-smartphone-game',
      host: 'jambit GmbH',
      title: 'My First Smartphone Game',
      link: 'https://www.mokkapps.de/blog/lessons-learned-my-first-smartphone-game/',
      slides: 'https://www.mokkapps.de/talks/my-first-smartphone-game/',
    },
    {
      type: 'talk',
      date: '06/2017',
      image: 'reactive-programming',
      host: 'jambit GmbH',
      title: 'Eine Einführung in Reactive Programming',
      link: 'https://www.jambit.com/en/latest-info/events/coffeetalks-june-2017/',
    },
    {
      type: 'talk',
      date: '04/2016',
      image: 'unity',
      host: 'jambit GmbH',
      title:
        'Unity – Eine Einführung in die Cross-Plattform-Spiele-Entwicklung',
      link: 'https://jambit.com/aktuelles/veranstaltungen/coffeetalks-april-2016/',
    },
    {
      type: 'article',
      title:
        "2020 inDepth Dev: The Last Guide For Angular Change Detection You'll Ever Need",
      link: 'https://indepth.dev/posts/1305/the-last-guide-for-angular-change-detection-youll-ever-need',
    },
    {
      type: 'article',
      title: '2016 ToiletPaper jambit: Kotlin: Das bessere Java?',
      link: 'https://www.jambit.com/aktuelles/toilet-papers/kotlin-das-bessere-java/',
    },
    {
      type: 'article',
      title:
        '2015 IEEE: Concept for an Intermodal Traveller Information System with Real-Time Data Using Complex Event Processing',
      link: 'https://ieeexplore.ieee.org/document/7313462/authors?reload=true',
    },
  ],
};

module.exports = config;
