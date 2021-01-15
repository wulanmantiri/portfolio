import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'

type TimeProps = {
  time: string
  align?: string
  size?: string
}

const TimeContainer = styled(Column)<{
  desktopWidth: string
}>`
  width: ${({ desktopWidth }) => desktopWidth};

  @media (max-width: 600px) {
    width: 20%;
    padding-right: 0.5vw;
  }
`

const SubHeading = styled.p`
  font-weight: 600;
  font-size: calc(0.8rem + 0.3vw);
  text-align: justify;
`

export const TimeText = ({ time, align, size }: TimeProps): ReactElement => (
  <TimeContainer align={align} desktopWidth={size === 'sm' ? '7%' : '14%'}>
    <SubHeading>{time}</SubHeading>
  </TimeContainer>
)
