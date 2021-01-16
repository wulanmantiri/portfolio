import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'
import { ChildrenProps } from 'types'

interface Props extends ChildrenProps {
  bgColor?: string
  id?: string
  label?: string | null
  containerRef?: (el: HTMLDivElement) => void
}

const Container = styled(Column)<{
  bgColor?: string
}>`
  align-items: center;
  padding: calc(5rem + 1vw) 0;
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.primary};
`

const Heading = styled.h1`
  margin-bottom: calc(2rem + 2vw);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  font-size: calc(2rem + 1.5vw);

  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`

const Content = styled.div`
  width: 80%;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Section = ({
  bgColor,
  id,
  label,
  containerRef,
  children,
}: Props): ReactElement => (
  <Container bgColor={bgColor} ref={containerRef} id={id}>
    {label && <Heading>{label}</Heading>}
    <Content>{children}</Content>
  </Container>
)

export default Section
