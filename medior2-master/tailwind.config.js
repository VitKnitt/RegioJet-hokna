const defaultTheme = require('tailwindcss/defaultTheme');

const customValues = {
  '100': '25rem',
  '104': '26rem',
  '108': '27rem',
  '112': '28rem',
  '116': '29rem',
  '120': '30rem',
};

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      base: ['1rem', '1.5rem'], // 16px, 24px
      xxs: ['0.625rem', '1rem'], // 10px, 16px
      xs: ['0.75rem', '1.125rem'], // 12px, 18px
      sm: ['0.875rem', '1.25rem'], // 14px, 20px
      lg: ['1.125rem', '1.625rem'], // 18px, 26px
      xl: ['1.5rem', '1.75rem'], // 24px, 28px
      xxl: ['1.875rem', '2.25rem'], // 30px, 36px
      big: ['2.625rem', '4rem'], // 42px, 64px
      max: ['3rem', '3.625rem'], // 48px, 58px
    },
    fontWeight: {
      bold: '600',
    },
    maxWidth: {
      page: '1136px',
      modal: '832px',
    },
    borderRadius: {
      none: 0,
      sm: '0.25rem', // 4px,
      md: '0.375rem', // 6px,
      lg: '0.5rem', // 8px,
      xl: '0.75rem', // 12px,
      full: '9999px',
    },
    boxShadow: {
      around: '0px 0px 8px rgba(0, 91, 191, 0.25)',
      sm: '0px 1px 2px rgba(0, 91, 191, 0.25)',
      lg: '0px 3px 4px rgba(0, 91, 191, 0.25)',
      none: 'none',
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#01172F',
      white: '#FFF',
      gray: {
        DEFAULT: '#5F5F5F',
        'dark-1': '#3a3a3aff',
        'light-1': '#D7D7D7',
        'light-2': '#EFEFEF',
        'light-3': '#F9F8F8',
      } ,
      yellow: {
        DEFAULT: '#FABB00',
        'dark-1': '#FAA500',
        'dark-2': '#EF8F00',
        'light-1': '#FFE9AC',
        'light-2': '#FFF0D1',
      },
      blue: {
        DEFAULT: '#00519E',
        'dark-1': '#044481',
        'dark-2': '#013B72',
        'light': '#CCDCEC',
      },
      green: {
        DEFAULT: '#026F00',
        light: '#E6F9D9',
      },
      red: {
        DEFAULT: '#FF0F1D',
        dark: '#E2003B',
        light: '#FFF2F4',
      },
      violet: "#800080",
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      fontFamily: {
        'sans': ['Gabarito', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        1: 1,
        backdrop: 100,
      },
      screens: {
        'max-xxs': { 'max': '390px' },
        'max-xs': { 'max': '479px' },
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        mobile: '288px',
        desktop: '1224px',
        wide: '1600px',
      },
      width: customValues,
      height: customValues,
      minWidth: {
        card: '280px',
      },
      transitionDuration: {
        'default': '300ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./scripts/fontWeightTailwindPlugin'),
  ],
};
