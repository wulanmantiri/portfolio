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

  &:hover {
    transform: scale3d(1.01, 1.01, 1);
    transform-style: preserve-3d;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.5rem;
    padding: 0.4rem 0.7rem;
    box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.sidebar};
    transition: 0.2s;
  }
`

const NavItem = ({ to, onClick, children }: Props): ReactElement => (
  <StyledHashLink smooth to={to} onClick={onClick}>
    {children}
  </StyledHashLink>
)

export { NavItem }
