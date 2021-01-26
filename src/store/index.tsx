import React, { ReactElement } from 'react'

import { ChildrenProps } from 'types'
import ThemeProvider from './ThemeProvider'
import LoadProvider from './LoadProvider'

const ContextProvider = ({ children }: ChildrenProps): ReactElement => (
  <ThemeProvider>
    <LoadProvider>{children}</LoadProvider>
  </ThemeProvider>
)

export default ContextProvider
