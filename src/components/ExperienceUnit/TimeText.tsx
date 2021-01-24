import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'

type TimeProps = {
  time: string
  align?: string
  size?: string
}

const TimeContainer = styled(Column)<{
  size?: string
}>`
  width: ${({ size }) => (size === 'sm' ? '7%' : '15%')};

  @media (max-width: 600px) {
    width: ${({ size }) => (size === 'sm' ? '10%' : '20%')};
  }
`

const SubHeading = styled.p`
  font-weight: 600;
  font-size: calc(0.7rem + 0.4vw);
  text-align: justify;
`

export const TimeText = ({ time, align, size }: TimeProps): ReactElement => (
  <TimeContainer align={align} size={size}>
    <SubHeading>{time}</SubHeading>
  </TimeContainer>
)
