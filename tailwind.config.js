module.exports = {
  important: true,
  darkMode: 'media',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Domine', 'sans-serif'],
      },
      textColor: {
        'accent': 'var(--accent)',
      },
      fontSize: {
        '10xl': '5rem'
      },
      minHeight: {
        '0': '0',
        'testimonial-desktop': '150px',
        'testimonial-mobile': '350px',
        '50px': '50px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
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
        accent: 'var(--accent)',
        background: 'var(--background)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
        'basic-button-text': 'var(--basic-button-text)',
        'color-toggle-light': 'var(--color-toggle-light)',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
