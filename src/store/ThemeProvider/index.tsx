import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { ChildrenProps } from 'types'
import theme, { GlobalStyle } from 'constants/theme'

const Theme = ({ children }: ChildrenProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
