import { DefaultTheme } from 'styled-components'
import { fonts } from '../fonts'

const colors = {
  border: '#282828',
  sidebar: '#7F7F7F',
  primary: '#000000',
  secondary: '#F7F7F7',
  evenSection: '#0a0a0a',
  oddSection: '#060606',
  contrast: '#FFFFFF',
  highlightBlue: '#21416e',
  navbar: 'rgba(10, 10, 10, 0.7)',

  // constant
  settings: '#292929',
  blue: '#1984EA',
}

const darkTheme: DefaultTheme = { colors, fonts }

export default darkTheme
