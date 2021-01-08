import { DefaultTheme } from 'styled-components'
import { fonts } from '../fonts'

const colors = {
  border: '#E2E2E2',
  sidebar: '#7F7F7F',
  primary: '#FFFFFF',
  secondary: '#1D1D1F',
  section: '#F7F7F7',
  contrast: {
    full: '#000000',
    half: '#292929',
  },
  navbar: 'rgba(254, 254, 254, 0.6)',
}

const lightTheme: DefaultTheme = { colors, fonts }

export default lightTheme
