import React, { ReactElement } from 'react'

import { ChildrenProps } from 'types'
import ThemeProvider from './ThemeProvider'

const ContextProvider = ({ children }: ChildrenProps): ReactElement => (
  <ThemeProvider>{children}</ThemeProvider>
)

export default ContextProvider
