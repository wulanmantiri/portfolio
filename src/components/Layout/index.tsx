import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { ChildrenProps } from 'types'
import { Center } from 'components/styled'
import { Navbar } from 'components'

const Container = styled(Center)`
  padding-top: calc(3rem + 0.6vw);
`

const Content = styled.div`
  width: 80%;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const Layout = ({ children }: ChildrenProps): ReactElement => (
  <Container>
    <Navbar />
    <Content>{children}</Content>
  </Container>
)

export default Layout
