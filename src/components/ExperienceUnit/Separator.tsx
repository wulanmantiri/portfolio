import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

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

// Animated versions
export const AnimatedSeparator = styled.div<{
  isVisible: boolean
  delay?: number
}>`
  margin: 0 2%;
  flex-shrink: 1;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  transition-delay: ${({ delay }) => delay || 0}ms;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
    `}
`

export const AnimatedCircle = styled.div<{
  isVisible: boolean
  delay?: number
}>`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 8px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: ${({ delay }) => (delay || 0) + 200}ms;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`

export const AnimatedVSeparator = styled.div<{
  isVisible: boolean
  delay?: number
}>`
  background-color: ${({ theme }) => theme.colors.blue};
  height: calc(100% - 18px);
  width: 2px;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: ${({ delay }) => (delay || 0) + 400}ms;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: scaleY(1);
    `}
`

export const RoadSeparator = ({
  isVisible,
  delay,
}: {
  isVisible: boolean
  delay?: number
}): ReactElement => (
  <AnimatedSeparator isVisible={isVisible} delay={delay}>
    <AnimatedCircle isVisible={isVisible} delay={delay} />
    <AnimatedVSeparator isVisible={isVisible} delay={delay} />
  </AnimatedSeparator>
)
