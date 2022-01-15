module.exports = {
  important: true,
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
      zIndex: {
        200: '200',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Domine', 'sans-serif'],
      },
      textColor: {
        accent: 'var(--accent)',
        main: 'var(--text-main)',
      },
      fontSize: {
        '7xl': '5rem',
      },
      minHeight: {
        0: '0',
        'testimonial-desktop': '150px',
        'testimonial-mobile': '350px',
        '50px': '50px',
        '200px': '200px',

        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        '100vh': '100vh',
      },
      maxHeight: {
        72: '18rem',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '60%',
        '3/4': '75%',
        full: '100%',
      },
      screens: {
        xxl: '1920px',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-darken': 'var(--secondary-darken)',
        accent: 'var(--accent)',
        'accent-darken': 'var(--accent-darken)',
        background: 'var(--background)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
        'basic-button-text': 'var(--basic-button-text)',
        'button-background': 'var(--button-background)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar'),
    // require('tailwindcss-debug-screens'),
  ],
};
