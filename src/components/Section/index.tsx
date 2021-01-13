import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'
import { ChildrenProps } from 'types'

interface Props extends ChildrenProps {
  bgColor: string
  label?: string | null
  containerRef: (el: HTMLDivElement) => HTMLDivElement
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
  margin: 2rem 0 calc(2rem + 2vw);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  font-size: calc(2rem + 1.5vw);
`

const Content = styled.div`
  width: 80%;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Section = ({
  bgColor,
  label,
  containerRef,
  children,
}: Props): ReactElement => (
  <Container
    bgColor={bgColor}
    ref={containerRef}
    id={label ? label.toLowerCase() : ''}
  >
    {label && <Heading>{label}</Heading>}
    <Content>{children}</Content>
  </Container>
)

export default Section
