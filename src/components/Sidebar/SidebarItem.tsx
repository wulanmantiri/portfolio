import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Location } from 'hooks/useMouseRef'
import { Center } from 'components/styled'

type Props = {
  to: Location
  active: boolean
  children: string
}

const Separator = styled.div<{
  active: boolean
}>`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  height: ${({ active }) => (active ? '5rem' : '0')};
  margin-top: ${({ active }) => (active ? '0' : '-1rem')};
  transition: all 0.4s;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1rem 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: calc(0.8rem + 0.2vw);
  color: ${({ theme }) => theme.colors.sidebar};
`

const SidebarItem = ({ to, active, children }: Props): ReactElement => (
  <Center>
    <StyledLink to={to}>{children}</StyledLink>
    <Separator active={active} />
  </Center>
)

export { SidebarItem }
