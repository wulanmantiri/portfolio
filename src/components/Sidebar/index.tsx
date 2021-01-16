import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { MouseRef } from 'hooks/useMouseRef'
import { SIDEBAR_ITEMS } from 'constants/section'
import { SidebarItem } from './SidebarItem'

type Props = {
  mouseRef: MouseRef
}

const Container = styled.div`
  position: fixed;
  left: calc(0.5rem + 1.5vw);
  bottom: 10vh;
  z-index: 9;
`

const Sidebar = ({ mouseRef }: Props): ReactElement => (
  <Container>
    {SIDEBAR_ITEMS.map(({ path }, i) => (
      <SidebarItem
        key={`sidenav${i + 1}`}
        to={path}
        active={mouseRef.active[i]}
        onClick={() => mouseRef.scrollToElement(i)}
      >
        {`0${i + 1}`}
      </SidebarItem>
    ))}
  </Container>
)

export default Sidebar
