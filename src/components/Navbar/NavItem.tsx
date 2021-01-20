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
  <StyledHashLink smooth to={to} onClick={onClick}>
    {children}
  </StyledHashLink>
)

export { NavItem }
