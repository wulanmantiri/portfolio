import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { MouseRef } from 'hooks/useMouseRef'
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
    {mouseRef.sections.map(({ pathname, hash }, i) => (
      <SidebarItem
        key={`sidenav${i + 1}`}
        to={{
          pathname,
          hash,
        }}
        active={mouseRef.active[i]}
      >
        {`0${i + 1}`}
      </SidebarItem>
    ))}
  </Container>
)

export default Sidebar
