import { DefaultTheme } from 'styled-components'

const fonts = {
  heading: 'Clone Machine, sans-serif',
  body: 'Cairo, system-ui, sans-serif',
}

const colors = {
  border: '#E2E2E2',
  text: '#1D1D1F',
}

const theme: DefaultTheme = { colors, fonts }

export { GlobalStyle } from './globalStyles'
export default theme
