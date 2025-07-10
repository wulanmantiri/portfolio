import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { SpacedColumn } from 'components/styled'
import { AnimatedExperienceUnit } from 'components'
import { useScrollAnimation } from 'hooks'
import { Experience } from 'models/experience'

type Props = {
  experiencesList: Experience[]
  achievementsList: Experience[]
}

const Heading = styled.h1`
  font-size: calc(1.5rem + 1vw);
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  margin: calc(2rem + 2vw) 0;
`

const AnimatedHeading = styled(Heading)<{
  isVisible: boolean
}>`
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${({ isVisible }) =>
    isVisible &&
    `
    opacity: 1;
    transform: translateY(0);
  `}
`

const ExperiencesList = ({
  experiencesList,
  achievementsList,
}: Props): ReactElement => {
  const {
    ref: headingRef,
    isVisible: isHeadingVisible,
  } = useScrollAnimation<HTMLHeadingElement>({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  })

  return (
    <>
      <SpacedColumn spacing="2rem">
        {experiencesList.map((exp, idx) => (
          <AnimatedExperienceUnit key={`exp${idx}`} {...exp} />
        ))}
      </SpacedColumn>
      <AnimatedHeading ref={headingRef} isVisible={isHeadingVisible}>
        and Achievements
      </AnimatedHeading>
      <SpacedColumn spacing="1.5rem">
        {achievementsList.map((exp, idx) => (
          <AnimatedExperienceUnit
            key={`ach${idx}`}
            {...exp}
            type="achievement"
          />
        ))}
      </SpacedColumn>
    </>
  )
}

export default ExperiencesList
