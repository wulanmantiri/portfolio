import React, { ReactElement, useContext, useState } from 'react'
import styled from 'styled-components'

import { Row } from 'components/styled'
import { ThemeContext } from 'store/ThemeProvider'
import { TripleLineIcon } from 'components'

const FixedContainer = styled.div`
  position: fixed;
  left: 2vw;
  bottom: 5vh;
  z-index: 10;
`

const PopupContainer = styled.div`
  position: fixed;
  left: 2vw;
  bottom: 10vh;
  z-index: 10;
  width: 13rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.contrast.half};
  border-radius: 0.5rem;
`

const Heading = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const Option = styled.div<{
  selected: boolean
}>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.contrast.full : 'transparent'};
  border-radius: 0.5rem;
  width: 5rem;
  text-align: center;
  font-size: calc(0.8rem + 0.1vw);
  padding: 0.2rem;
`

const Settings = (): ReactElement => {
  const { lightThemed, setLightThemed } = useContext(ThemeContext)
  const [opened, setOpened] = useState(false)

  return (
    <FixedContainer>
      <TripleLineIcon clicked={opened} setClicked={setOpened} />
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
