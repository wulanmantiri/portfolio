import React, { ReactElement, createContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ChildrenProps } from 'types'
import { lightTheme, darkTheme, GlobalStyles } from 'theme'

interface IThemeContext {
  lightThemed: boolean
  setLightThemed: (b: boolean) => void
}

export const ThemeContext = createContext<IThemeContext>({
  lightThemed: false,
  setLightThemed: () => null,
})

const ThemeProvider = ({ children }: ChildrenProps): ReactElement => {
  const [lightThemed, setLightThemed] = useState<boolean>(true)

  return (
    <ThemeContext.Provider value={{ lightThemed, setLightThemed }}>
      <StyledThemeProvider theme={lightThemed ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
