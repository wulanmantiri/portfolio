import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { SIDEBAR_SECTIONS } from 'constants/section'
import { SidebarItem } from './SidebarItem'

const Container = styled.div`
  position: fixed;
  left: 2vw;
  bottom: 10vh;
  z-index: 9;
`

const Sidebar = (): ReactElement => {
  return (
    <Container>
      {SIDEBAR_SECTIONS.map(({ path }, i) => (
        <SidebarItem key={`sidenav${i + 1}`} to={path}>
          {`0${i + 1}`}
        </SidebarItem>
      ))}
    </Container>
  )
}

export default Sidebar
