import React, { ReactElement } from 'react'

import { ChildrenProps } from 'types'
import { Navbar, Settings } from 'components'

const Layout = ({ children }: ChildrenProps): ReactElement => (
  <>
    <Navbar />
    <Settings />
    {children}
  </>
)

export default Layout
