import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import theme from 'typography-theme-alton';
theme.overrideThemeStyles = () => ({
  a: {
    color: '#FC1A20',
    textDecoration: 'none',
  },

  'a:hover': {
    color: '#FC1A20',
    textDecoration: 'underline',
  },

  html: {
    boxSizing: 'border-box',
    background: '#424242',
  },
});

theme.plugins = [new CodePlugin()];

const typography = new Typography(theme);

export default typography;
