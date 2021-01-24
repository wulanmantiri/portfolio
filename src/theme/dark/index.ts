import { DefaultTheme } from 'styled-components'
import { fonts } from '../fonts'

const colors = {
  border: '#282828',
  sidebar: '#7F7F7F',
  primary: '#000000',
  secondary: '#F7F7F7',
  evenSection: '#060606',
  oddSection: '#0b0b0b',
  contrast: '#FFFFFF',
  navbar: 'rgba(10, 10, 10, 0.7)',

  // constant
  settings: '#292929',
  blue: '#1984EA',
  lightBlue: '#3d94fd',
}

const darkTheme: DefaultTheme = { colors, fonts }

export default darkTheme
