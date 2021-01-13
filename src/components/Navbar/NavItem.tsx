import React, { ReactElement } from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

type Props = {
  to: string
  children: JSX.Element | string
}

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`

const NavItem = ({ to, children }: Props): ReactElement => (
  <StyledHashLink smooth to={to}>
    {children}
  </StyledHashLink>
)

export { NavItem }
