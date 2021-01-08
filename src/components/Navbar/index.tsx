import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Row, Center, SpacedRow } from 'components/styled'

const FixedContainer = styled(Center)`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: calc(3rem + 0.5vw);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const NavContainer = styled(Row)`
  width: 80%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`

const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  font-size: 1.5rem;
`

const Navbar = (): ReactElement => (
  <FixedContainer>
    <NavContainer>
      <NavItem to="/">
        <Logo>wulan mantiri</Logo>
      </NavItem>
      <SpacedRow spacing="2rem">
        <NavItem to="/#experiences">Experiences</NavItem>
        <NavItem to="/#projects">Projects</NavItem>
      </SpacedRow>
    </NavContainer>
  </FixedContainer>
)

export default Navbar
