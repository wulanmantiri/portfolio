import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 2%;
  flex-shrink: 1;
  flex-basis: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circle = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 8px;
`

const VSeparator = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  height: calc(100% - 18px);
  width: 2px;
`

export const Separator = (): ReactElement => (
  <Container>
    <Circle />
    <VSeparator />
  </Container>
)
