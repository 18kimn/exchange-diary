import {configureFonts, DefaultTheme} from 'react-native-paper'

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Helvetica light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Helvetica thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Helvetica light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Helvetica thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Helvetica light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Helvetica thin',
      fontWeight: 'normal',
    },
  },
}

const Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
}

export default Theme
