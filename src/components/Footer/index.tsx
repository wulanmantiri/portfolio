import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { EmailIcon, PhoneIcon, LinkedinIcon } from 'components'
import { SpacedRow } from 'components/styled'
import { PHONE_URL, EMAIL_URL, LINKEDIN_URL } from 'constants/biodata'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.oddSection};

  @media (max-width: 600px) {
    height: 5rem;
  }
`

const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.sidebar};
  padding: 1rem 0;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0.8rem 0;
  }
`

const Footer = (): ReactElement => (
  <Container>
    <Content>
      <p>2021 - Wulan Mantiri</p>
      <SpacedRow spacing="1.2rem" align="center">
        <a
          href={EMAIL_URL}
          target="_blank"
          rel="noreferrer"
          style={{ margin: '3px 0.2rem 0 0' }}
        >
          <EmailIcon size="22" />
        </a>
        <a href={PHONE_URL} target="_blank" rel="noreferrer">
          <PhoneIcon size="15" />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          <LinkedinIcon size="25" />
        </a>
      </SpacedRow>
    </Content>
  </Container>
)

export default Footer
