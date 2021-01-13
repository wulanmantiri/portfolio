import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { MouseRef } from 'hooks/useMouseRef'
import { SidebarItem } from './SidebarItem'

type Props = {
  sections: {
    path: string
    ref: MouseRef
  }[]
}

const Container = styled.div`
  position: fixed;
  left: calc(0.5rem + 1.5vw);
  bottom: 10vh;
  z-index: 9;
`

const Sidebar = ({ sections }: Props): ReactElement => (
  <Container>
    {sections.map(({ path, ref }, i) => (
      <SidebarItem key={`sidenav${i + 1}`} to={path} containerRef={ref}>
        {`0${i + 1}`}
      </SidebarItem>
    ))}
  </Container>
)

export default Sidebar
