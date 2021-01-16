import React, { ReactElement } from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

type Props = {
  to: string
  children: JSX.Element | string
  onClick?: VoidFunction
}

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;

  &:hover {
    transform: scale3d(0.95, 0.95, 1);
    transform-style: preserve-3d;
  }
`

const NavItem = ({ to, onClick, children }: Props): ReactElement => (
  <StyledHashLink smooth to={to} onClick={onClick}>
    {children}
  </StyledHashLink>
)

export { NavItem }
