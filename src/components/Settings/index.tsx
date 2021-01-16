import React, { ReactElement, useContext, useState } from 'react'
import styled from 'styled-components'

import { Row, Center, SpacedRow } from 'components/styled'
import { ThemeContext } from 'store/ThemeProvider'
import { TripleLineIcon, SunIcon, MoonIcon } from 'components'

const FixedContainer = styled.div`
  position: fixed;
  left: calc(0.5rem + 1.5vw);
  bottom: 3vh;
  z-index: 10;
`

const StyledBox = styled(Center)`
  background-color: ${({ theme }) => theme.colors.border};
  width: 35px;
  height: 35px;
  border-radius: 0.5rem;
  box-shadow: 0.5px 0.5px 3px ${({ theme }) => theme.colors.sidebar};
`

const PopupContainer = styled(Center)`
  position: fixed;
  left: calc(0.5rem + 1.5vw);
  bottom: 10vh;
  z-index: 10;
  width: 13.5rem;
  height: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.settings};
  border-radius: 0.5rem;
`

const Heading = styled.p`
  color: white;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0.7rem;
`

const Option = styled.div<{
  selected: boolean
}>`
  cursor: pointer;
  color: white;
  background-color: ${({ selected }) => (selected ? 'black' : 'transparent')};
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  font-size: calc(0.8rem + 0.1vw);
  padding: 0.7rem 1rem;
`

const Settings = (): ReactElement => {
  const { lightThemed, setLightThemed } = useContext(ThemeContext)
  const [opened, setOpened] = useState(false)

  return (
    <FixedContainer>
      <StyledBox>
        <TripleLineIcon clicked={opened} setClicked={setOpened} />
      </StyledBox>
      {opened && (
        <PopupContainer>
          <Heading>Appearance</Heading>
          <Row justify="space-between" width="11.5rem">
            <Option onClick={() => setLightThemed(true)} selected={lightThemed}>
              <SpacedRow align="center">
                <SunIcon />
                <p>Light</p>
              </SpacedRow>
            </Option>
            <Option
              onClick={() => setLightThemed(false)}
              selected={!lightThemed}
            >
              <SpacedRow align="center">
                <MoonIcon />
                <p>Dark</p>
              </SpacedRow>
            </Option>
          </Row>
        </PopupContainer>
      )}
    </FixedContainer>
  )
}

export default Settings
