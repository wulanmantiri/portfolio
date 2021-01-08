import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Center } from 'components/styled'

type Props = {
  to: string
  children: string
}

const Separator = styled.div<{
  active: boolean
}>`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  opacity: ${({ active }) => (active ? '1' : '0')};
  height: ${({ active }) => (active ? '5rem' : '0')};
  margin-top: ${({ active }) => (active ? '-1rem' : '0')};
  transition: all 0.2s 0.5s;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: calc(0.8rem + 0.2vw);
  color: ${({ theme }) => theme.colors.sidebar};
`

const SidebarItem = ({ to, children }: Props): ReactElement => {
  const [active, setActive] = useState(false)

  return (
    <Center>
      <StyledLink to={to} onClick={() => setActive(true)}>
        {children}
      </StyledLink>
      <Separator active={active} />
    </Center>
  )
}

export { SidebarItem }
