import { DefaultTheme } from 'styled-components'
import { fonts } from '../fonts'

const colors = {
  border: '#7F7F7F',
  sidebar: '#7F7F7F',
  primary: '#000000',
  secondary: '#F7F7F7',
  section: '#151515',
  contrast: {
    full: '#FFFFFF',
    half: '#818181',
  },
  navbar: 'rgba(21, 21, 21, 0.6)',
}

const darkTheme: DefaultTheme = { colors, fonts }

export default darkTheme
