import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import { useScrollAnimation } from 'hooks'
import { Experience as Props } from 'models/experience'
import { TimeText, AnimatedTimeText } from './TimeText'
import { Content, AnimatedContent } from './Content'
import { Separator, RoadSeparator } from './Separator'

const Row = styled.div<{
  justify?: string
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
`

const Achievement = ({ time, ...rest }: Props): ReactElement => (
  <Row justify="flex-end">
    <Content align="right" {...rest} size="lg" />
    <Separator />
    <TimeText time={time} size="sm" />
  </Row>
)

const Experience = ({ time, ...rest }: Props): ReactElement => (
  <Row>
    <TimeText time={time} align="flex-end" />
    <Separator />
    <Content {...rest} />
  </Row>
)

const ExperienceUnit = ({ type, ...rest }: Props): ReactElement => {
  const Unit = type === 'achievement' ? Achievement : Experience

  return <Unit {...rest} />
}

// Animated versions
const AnimatedRow = styled.div<{
  justify?: string
  isVisible: boolean
  delay?: number
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: ${({ delay }) => delay || 0}ms;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

const AnimatedAchievement = ({ time, ...rest }: Props): ReactElement => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  })

  return (
    <AnimatedRow ref={ref} justify="flex-end" isVisible={isVisible} delay={200}>
      <AnimatedContent
        align="right"
        {...rest}
        size="lg"
        isVisible={isVisible}
        isRight={true}
        delay={1200}
      />
      <RoadSeparator isVisible={isVisible} delay={400} />
      <AnimatedTimeText
        time={time}
        size="sm"
        isVisible={isVisible}
        isRight={true}
        delay={1400}
      />
    </AnimatedRow>
  )
}

const AnimatedExperience = ({ time, ...rest }: Props): ReactElement => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  })

  return (
    <AnimatedRow ref={ref} isVisible={isVisible} delay={200}>
      <AnimatedTimeText
        time={time}
        align="flex-end"
        isVisible={isVisible}
        delay={1400}
      />
      <RoadSeparator isVisible={isVisible} delay={400} />
      <AnimatedContent {...rest} isVisible={isVisible} delay={1200} />
    </AnimatedRow>
  )
}

const AnimatedExperienceUnit = ({ type, ...rest }: Props): ReactElement => {
  const Unit = type === 'achievement' ? AnimatedAchievement : AnimatedExperience

  return <Unit {...rest} />
}

export default ExperienceUnit
export { AnimatedExperienceUnit }
