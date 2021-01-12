import React, { ReactElement, useContext, useState } from 'react'
import styled from 'styled-components'

import { Row, Center } from 'components/styled'
import { ThemeContext } from 'store/ThemeProvider'
import { TripleLineIcon } from 'components'

const FixedContainer = styled.div`
  position: fixed;
  left: calc(0.5rem + 1.5vw);
  bottom: 3vh;
  z-index: 10;
`

const StyledBox = styled(Center)`
  background-color: ${({ theme }) => theme.colors.settings};
  width: 35px;
  height: 35px;
  border-radius: 0.5rem;
`

const PopupContainer = styled.div`
  position: fixed;
  left: calc(0.5rem + 1.5vw);
  bottom: 10vh;
  z-index: 10;
  width: 13rem;
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
  background-color: ${({ theme, selected }) =>
    selected ? 'black' : 'transparent'};
  border-radius: 0.5rem;
  width: 5rem;
  text-align: center;
  font-size: calc(0.8rem + 0.1vw);
  padding: 0.7rem;
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
          <Row justify="space-between">
            <Option onClick={() => setLightThemed(true)} selected={lightThemed}>
              Light
            </Option>
            <Option
              onClick={() => setLightThemed(false)}
              selected={!lightThemed}
            >
              Dark
            </Option>
          </Row>
        </PopupContainer>
      )}
    </FixedContainer>
  )
}

export default Settings
