import { shade } from 'polished'

export const colorsTheme = {
    white: '#fff',
    grey: shade(0.3, '#f7f8fc'),
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    cyan: '#78D1E1',
    red: '#E96379',
    yellow: '#e7de79'
}

export const darkTheme = {
  backgrounds: {
    lightest: '#252131',
    lighter: '#201B2D',
    dark: '#191622',
    darker: '#15121E',
    darkest: '#13111B'
  },
  colors: {
    lightest: '#ffffff',
    lighter: '#f7f8fc',
    dark: '#f4f6ff',
    darker: '#ebeefc',
    darkest: '#c1c6e0'
  }
  
}

export const lightTheme = {
  backgrounds: {
    lightest: '#ffffff',
    lighter: '#f7f8fc',
    dark: '#f4f6ff',
    darker: '#ebeefc',
    darkest: '#c1c6e0'
  },
  colors: {
    lightest: '#252131',
    lighter: '#201B2D',
    dark: '#191622',
    darker: '#15121E',
    darkest: '#13111B'
  }
}
