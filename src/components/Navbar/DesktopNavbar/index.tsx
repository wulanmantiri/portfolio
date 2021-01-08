import React, { ReactElement } from 'react'

import { SpacedRow } from 'components/styled'
import { SECTIONS } from 'constants/section'
import { NavItem } from '../NavItem'

const DesktopNavbar = (): ReactElement => (
  <SpacedRow spacing="2rem">
    {SECTIONS.map(({ path, label }, id) => (
      <NavItem key={'nav' + id} to={path}>
        {label}
      </NavItem>
    ))}
  </SpacedRow>
)

export default DesktopNavbar
