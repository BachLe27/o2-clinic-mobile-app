type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700?: string;
  800?: string;
  900?: string;
};

type Colors = {
  neutral: ColorScale;
  brand: Omit<ColorScale, '700' | '800' | '900'>;
  error: Omit<ColorScale, '700' | '800' | '900'>;
  warning: Omit<ColorScale, '700' | '800' | '900'>;
  success: Omit<ColorScale, '700' | '800' | '900'>;
  blue: ColorScale;
};

const colors: Colors = {
  'neutral': {
    50: '#FCFCFC',
    100: '#F5F5F5',
    200: '#EDEDED',
    300: '#E0E0E0',
    400: '#C2C2C2',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#404040',
    900: '#242424',
  },
  'brand': {
    50: '#EEF6FF',
    100: '#D9EBFF',
    200: '#BCDCFF',
    300: '#8EC8FF',
    400: '#59A8FF',
    500: '#247CFF',
    600: '#1B64F5',
  },
  'error': {
    50: '#FFF1F3',
    100: '#FFDFE3',
    200: '#FFC5CD',
    300: '#FF9DAA',
    400: '#FF6478',
    500: '#FF304B',
    600: '#ED1131'
  },
  'warning': {
    50: '#FFFFE7',
    100: '#FEFFC1',
    200: '#FFFD86',
    300: '#FFF441',
    400: '#FFE50D',
    500: '#FFD600',
    600: '#D19D00'
  },
  'success': {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D1',
    300: '#85F0AE',
    400: '#49DF82',
    500: '#1EB357',
    600: '#15A44C'
  },
  'blue': {
    50: '#F5F6FF',
    100: '#C5CEFD',
    200: '#98A6F9',
    300: '#7084F2',
    400: '#5067E9',
    500: '#3851DD',
    600: '#2740CD',
    700: '#1B32B8',
    800: '#1328A0',
    900: '#0E2087'
  }
};

export default colors;