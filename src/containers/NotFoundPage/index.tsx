import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Layout, Section } from 'components'
import { Center } from 'components/styled'

const Container = styled(Center)`
  min-height: calc(100vh - 13.5rem - 2vw);

  @media (max-width: 600px) {
    min-height: calc(100vh - 15rem - 2vw);
  }
`

const ExtraLargeText = styled.h1`
  color: ${({ theme }) => theme.colors.settings};
  font-size: calc(5rem + 7vw);
  letter-spacing: calc(2rem + 2vw);
  margin-right: calc(-2rem - 2vw);
`

const LargeText = styled.h1`
  color: ${({ theme }) => theme.colors.settings};
  font-size: calc(2rem + 2vw);
  margin: -2vw 0 5vh;
`

const RedirectText = styled.p`
  font-weight: 600;
  font-size: calc(1rem + 0.5vw);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};
  vertical-align: top;
`

const NotFoundPage = (): ReactElement => (
  <Layout>
    <Section>
      <Container>
        <Center>
          <ExtraLargeText>404</ExtraLargeText>
          <LargeText>Page Not Found</LargeText>
        </Center>
        <RedirectText>
          you seem lost. back to <StyledLink to="/">home</StyledLink>?
        </RedirectText>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
