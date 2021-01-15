import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { SpacedColumn } from 'components/styled'
import { TripleLineIcon } from 'components'
import { NAV_ITEMS } from 'constants/section'
import { NavItem } from '../NavItem'

const PopupContainer = styled.div`
  position: fixed;
  top: calc(3rem + 0.5vw);
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const NavContainer = styled(SpacedColumn)`
  width: 95%;
  align-items: flex-end;
`

const MobileNavbar = (): ReactElement => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <TripleLineIcon clicked={opened} setClicked={setOpened} />
      {opened && (
        <PopupContainer>
          <NavContainer>
            {NAV_ITEMS.map(({ path, label }, id) => (
              <NavItem
                key={`nav${id}`}
                to={path}
                onClick={() => setOpened(false)}
              >
                {label}
              </NavItem>
            ))}
          </NavContainer>
        </PopupContainer>
      )}
    </>
  )
}

export default MobileNavbar
