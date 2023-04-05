import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { EmailIcon, PhoneIcon, ExternalLinkIcon } from 'components'
import { SpacedColumn } from 'components/styled'
import {
  WULANS_EMAIL,
  WULANS_PHONE,
  LINKEDIN_URL,
  RESUME_URL,
  EMAIL_URL,
  PHONE_URL,
  WULANS_COUNTRY_CODE,
} from 'constants/biodata'
import { ContactInfo } from './ContactInfo'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.evenSection};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  padding: calc(2rem + 1vw) 8%;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.border};
`

const Heading = styled.h1`
  font-size: calc(1.5rem + 0.7vw);
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
`

const SubHeading = styled.p`
  font-size: calc(1rem + 0.3vw);
  font-weight: 600;
  margin: calc(2rem + 2vw) 0 0.5rem;
`

const WrapContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ContactBox = (): ReactElement => (
  <Container>
    <Heading>lets get in touch</Heading>
    <WrapContainer>
      <SpacedColumn spacing="0.5rem">
        <SubHeading>contact me via</SubHeading>
        <ContactInfo url={EMAIL_URL} LeftIcon={EmailIcon} text={WULANS_EMAIL} />
        <ContactInfo
          url={PHONE_URL}
          LeftIcon={PhoneIcon}
          text={`${WULANS_COUNTRY_CODE} ${WULANS_PHONE}`}
        />
      </SpacedColumn>
      <SpacedColumn spacing="0.5rem" width="calc(7rem + 8vw)">
        <SubHeading>see my profile in</SubHeading>
        <ContactInfo
          url={LINKEDIN_URL}
          RightIcon={ExternalLinkIcon}
          text="linkedin"
        />
        <ContactInfo
          url={RESUME_URL}
          RightIcon={ExternalLinkIcon}
          text="resume"
        />
      </SpacedColumn>
    </WrapContainer>
  </Container>
)

export default ContactBox
