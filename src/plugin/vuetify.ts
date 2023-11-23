import { type ThemeDefinition } from 'vuetify'

export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#212121',
    'surface-hover': '#303030',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'text-primary': '#FFFFFF',
    
    'shadow-lg': '#424242',
  }
}

export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: '#fff',
    'surface-hover': '#eeeeee',
    primary: '#3f51b5',
    secondary: '#00ccff',
    error: '#ffcc00',
    'text-primary': '#000000',
    'shadow-lg': '#BEBEBE',
  }
}
