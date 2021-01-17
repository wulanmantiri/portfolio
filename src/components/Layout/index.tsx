import React, { ReactElement } from 'react'

import { ChildrenProps } from 'types'
import { Navbar, Settings, Footer } from 'components'

const Layout = ({ children }: ChildrenProps): ReactElement => (
  <>
    <Navbar />
    <Settings />
    {children}
    <Footer />
  </>
)

export default Layout
