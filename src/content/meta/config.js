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

  characteristics: [
    { text: 'MOBILE, GAME & FRONTEND DEVELOPER', emoji: '💻', ariaLabel: 'pc' },
    { text: 'BLOGGER', emoji: '📝', ariaLabel: 'memo' },
    { text: 'VIDEOGAME ENTHUSIAST', emoji: '🎮', ariaLabel: 'games' },
    { text: 'BEEKEEPER', emoji: '🐝', ariaLabel: 'bee' },
  ],

  projects: [
    {
      title: 'Standup Picker',
      description:
        'A desktop application which can be used in Scrum teams to initiate the daily Scrum meeting',
      usedTechnologies: ['Angular 5, Electron'],
      titleImage: '',
      githubUrl: '"https://github.com/Mokkapps/scrum-daily-standup-picker"',
    },
  ],

  skills: [
    { type: 'JavaScript', level: 90 },
    { type: 'TypeScript', level: 75 },
    { type: 'Java', level: 50 },
    { type: 'CSS', level: 70 },
    { type: 'HTML', level: 80 },
    { type: 'Angular', level: 80 },
    { type: 'React', level: 80 },
    { type: 'Node.js', level: 60 },
  ],
};

module.exports = config;
