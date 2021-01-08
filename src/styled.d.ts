import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      border: string
      sidebar: string
      primary: string
      secondary: string
      section: string
      contrast: {
        full: string
        half: string
      }
      navbar: string
    }
    fonts: {
      heading: string
      body: string
    }
  }
}
