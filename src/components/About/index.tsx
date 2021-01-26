import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { SpacedColumn, LeftToRightUnderline } from 'components/styled'
import { PROFILE_PIC_URL, WULANS_DESCRIPTION } from 'constants/biodata'
import { generateHighlightedText } from 'utils/generateHighlightedText'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 10rem - 2vw);

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 600px) {
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

const TextContainer = styled(SpacedColumn)`
  @media (min-width: 800px) {
    width: 60%;
  }
`

const Greetings = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: calc(1.2rem + 1.8vw);
  text-align: center;
`

const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: calc(2rem + 4vw);
  text-align: center;
`

const Description = styled.p`
  font-size: calc(0.8rem + 0.8vw);
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  vertical-align: top;
`

const PsNote = styled.p`
  font-size: calc(0.7rem + 0.3vw);
  text-align: center;
  font-weight: 600;
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
    <TextContainer align="center" spacing="5vh">
      <SpacedColumn align="center" spacing="-0.8vw">
        <Greetings>{`hi, i'm`}</Greetings>
        <Name>wulan mantiri</Name>
      </SpacedColumn>
      <Description>
        {generateHighlightedText(WULANS_DESCRIPTION)}
        See the recap of what I have done by scrolling or clicking{' '}
        <StyledLink to={contactPath}>
          <LeftToRightUnderline>here</LeftToRightUnderline>
        </StyledLink>
        .
      </Description>
      <PsNote>
        Works aside, I love to travel and hunt down local cuisines.
        <br />
        Well, the hobby stays dormant for now.
      </PsNote>
    </TextContainer>
  </Container>
)

export default About
