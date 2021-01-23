import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { SpacedColumn } from 'components/styled'
import { PROFILE_PIC_URL } from 'constants/biodata'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 10rem - 2vw);

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const ProfileImage = styled.img`
  height: calc(10rem + 20vw);
  object-fit: cover;
  padding: 1px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.border};

  @media (max-width: 800px) {
    margin-bottom: 4vh;
  }
`

const Greetings = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: calc(1.2rem + 1.8vw);
`

const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: calc(2rem + 4vw);
`

const Description = styled.p`
  font-size: calc(1rem + 0.6vw);
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  vertical-align: top;

  @media (max-width: 600px) {
    width: 85%;
  }
`

const PsNote = styled.span`
  font-size: calc(0.7rem + 0.3vw);
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};
  vertical-align: top;
  line-height: 1.4;
`

const contactPath = {
  pathname: '/',
  hash: '#contact',
}

const About = (): ReactElement => (
  <Container>
    <ProfileImage alt="Wulan's Profile Picture" src={PROFILE_PIC_URL} />
    <SpacedColumn align="center" spacing="5vh">
      <SpacedColumn align="center" spacing="-0.8vw">
        <Greetings>{`hi, i'm`}</Greetings>
        <Name>wulan mantiri</Name>
      </SpacedColumn>
      <Description>
        I am a full-time CS UI student and future full-stack developer.
        <br />
        Works aside, I love to travel and hunt down local cuisines.*
        <br />
        See the recap of what I have done by scrolling or clicking{' '}
        <StyledLink to={contactPath}>here</StyledLink>.
        <br />
        <PsNote>*Well, the hobby stays dormant for now.</PsNote>
      </Description>
    </SpacedColumn>
  </Container>
)

export default About
