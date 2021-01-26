import { DefaultTheme } from 'styled-components'
import { fonts } from '../fonts'

const colors = {
  border: '#d8d8d8',
  sidebar: '#585858',
  primary: '#FFFFFF',
  secondary: '#1D1D1F',
  evenSection: '#FFFFFF',
  oddSection: '#F7F7F7',
  contrast: '#000000',
  highlightBlue: '#badbf8',
  navbar: 'rgba(254, 254, 254, 0.7)',

  // constant
  settings: '#292929',
  blue: '#1984EA',
}

const lightTheme: DefaultTheme = { colors, fonts }

export default lightTheme
