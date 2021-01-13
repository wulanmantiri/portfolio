import React, { ReactElement } from 'react'

import { SpacedRow } from 'components/styled'
import { NAV_ITEMS } from 'constants/section'
import { NavItem } from '../NavItem'

const DesktopNavbar = (): ReactElement => (
  <SpacedRow spacing="2rem">
    {NAV_ITEMS.map(({ path, label }, id) => (
      <NavItem key={'nav' + id} to={path}>
        {label}
      </NavItem>
    ))}
  </SpacedRow>
)

export default DesktopNavbar
