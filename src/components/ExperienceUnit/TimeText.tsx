import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

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

// Animated version
export const AnimatedTimeText = styled(TimeText)<{
  isVisible: boolean
  delay?: number
  isRight?: boolean
}>`
  opacity: 0;
  transform: ${({ isRight }) =>
    isRight ? 'translateX(30px)' : 'translateX(-30px)'};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: ${({ delay }) => delay || 0}ms;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`
