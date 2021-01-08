import React, { ReactElement } from 'react'
import styled from 'styled-components'

type Props = {
  clicked: boolean
  setClicked: (c: boolean) => void
}

const Container = styled.div`
  cursor: pointer;
`

const Line = styled.div<{
  clicked?: boolean
  marginTop?: string
  opacity?: string
  transform?: string
}>`
  height: 1px;
  width: ${({ clicked }) => (clicked ? '20px' : '16px')};
  opacity: ${({ opacity }) => opacity || '1'};
  transform: ${({ clicked, transform }) => clicked && transform};
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ marginTop }) => marginTop || '6px'};
  transition: all 0.4s;
`

const TripleListIcon = ({ clicked, setClicked }: Props): ReactElement => (
  <Container onClick={() => setClicked(!clicked)}>
    <Line
      clicked={clicked}
      transform="rotate(-45deg) translate(-5px, 4px)"
      marginTop="0"
    />
    <Line clicked={clicked} opacity={clicked ? '0' : '1'} />
    <Line clicked={clicked} transform="rotate(45deg) translate(-6px, -5px)" />
  </Container>
)

export default TripleListIcon
