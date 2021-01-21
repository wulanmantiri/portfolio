import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Location } from 'hooks/useMouseRef'

type Props = {
  to: Location | string
  children: JSX.Element | string
  onClick?: VoidFunction
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  padding: 0 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale3d(1.05, 1.05, 1);
    transform-style: preserve-3d;
    background-color: ${({ theme }) => theme.colors.section};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.5rem;
    padding: 0.4rem 0.7rem;
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.border};
  }
`

const NavItem = ({ to, onClick, children }: Props): ReactElement => (
  <StyledLink to={to} onClick={onClick}>
    {children}
  </StyledLink>
)

export { NavItem }
