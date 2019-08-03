import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import theme from 'typography-theme-alton';
theme.overrideThemeStyles = () => ({
  a: {
    color: '#FC1A20',
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(#FC1A20, #FC1A20)',
    backgroundPosition: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size cubic-bezier(0, 0.5, 0, 1) 0.3s'
  },

  'a:hover': {
    color: '#FC1A20',
    textDecoration: 'none',
    backgroundSize: '100% 2px'
  },

  html: {
    boxSizing: 'border-box',
    background: '#424242',
  },
});

theme.plugins = [new CodePlugin()];

const typography = new Typography(theme);

export default typography;
