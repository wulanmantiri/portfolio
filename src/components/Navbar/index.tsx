import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Row, Center } from 'components/styled'
import { useWindow } from 'hooks'
import { NavItem } from './NavItem'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const FixedContainer = styled(Center)`
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  height: calc(3rem + 0.5vw);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.navbar};
  backdrop-filter: blur(5px);
`

const NavContainer = styled(Row)`
  width: 80%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  font-size: calc(1.3rem + 0.2vw);
`

const Navbar = (): ReactElement => {
  const { isMobile } = useWindow()

  return (
    <FixedContainer>
      <NavContainer>
        <NavItem to="/">
          <Logo>wulan mantiri</Logo>
        </NavItem>
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </NavContainer>
    </FixedContainer>
  )
}

export default Navbar
