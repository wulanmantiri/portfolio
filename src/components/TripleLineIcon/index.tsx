import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { SpacedColumn } from 'components/styled'

type Props = {
  clicked: boolean
  setClicked: (c: boolean) => void
}

const Container = styled(SpacedColumn)`
  cursor: pointer;
`

const Line = styled.div<{
  width?: string
  opacity?: string
  transform?: string
}>`
  height: 1px;
  width: ${({ width }) => width};
  opacity: ${({ opacity }) => opacity || '1'};
  transform: ${({ transform }) => transform};
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.4s;
`

const TripleListIcon = ({ clicked, setClicked }: Props): ReactElement => (
  <Container spacing="5px" onClick={() => setClicked(!clicked)}>
    <Line
      transform={clicked ? 'rotate(-45deg) translate(-5px, 4px)' : '0'}
      width={clicked ? '20px' : '18px'}
    />
    <Line opacity={clicked ? '0' : '1'} width={clicked ? '0' : '18px'} />
    <Line
      transform={clicked ? 'rotate(45deg) translate(-5px, -3px)' : '0'}
      width={clicked ? '20px' : '18px'}
    />
  </Container>
)

export default TripleListIcon
