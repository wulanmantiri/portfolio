import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'
import { ChildrenProps } from 'types'

interface Props extends ChildrenProps {
  bgColor: string
  title?: string
}

const Container = styled(Column)<{
  bgColor: string
}>`
  align-items: center;
  padding-top: calc(4rem + 1vw);
  min-height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`

const Heading = styled.h1`
  margin: 1rem 0 calc(1rem + 2vw);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  font-size: calc(2rem + 1vw);
`

const Content = styled.div`
  width: 80%;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Section = ({ bgColor, title, children }: Props): ReactElement => (
  <Container bgColor={bgColor}>
    {title && <Heading>{title}</Heading>}
    <Content>{children}</Content>
  </Container>
)

export default Section
