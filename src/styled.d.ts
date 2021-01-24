import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      border: string
      sidebar: string
      primary: string
      secondary: string
      evenSection: string
      oddSection: string
      contrast: string
      navbar: string

      settings: string
      blue: string
      lightBlue: string
    }
    fonts: {
      heading: string
      body: string
    }
  }
}
