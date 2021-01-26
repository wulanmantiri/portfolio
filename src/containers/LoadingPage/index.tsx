import React, { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

import { Center } from 'components/styled'

const Spin = keyframes`
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50%, 100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const ReverseSpin = keyframes`
  0%, 50% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
`

const Container = styled(Center)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.evenSection};
`

const LogoContainer = styled(Center)`
  flex-direction: row;
`

const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 100px;
  animation: ${Spin} 3s linear infinite;
`

const MLogo = styled(Logo)`
  animation: ${ReverseSpin} 3s linear infinite;
  margin-top: -50px;
  margin-left: -39px;
`

const LoadingPage = (): ReactElement => (
  <Container>
    <LogoContainer>
      <Logo>w</Logo>
      <MLogo>m</MLogo>
    </LogoContainer>
  </Container>
)

export default LoadingPage
