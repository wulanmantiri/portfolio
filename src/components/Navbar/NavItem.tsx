import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  to: string
  children: JSX.Element | string
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`

const NavItem = ({ to, children }: Props): ReactElement => (
  <StyledLink to={to}>{children}</StyledLink>
)

export { NavItem }
