import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { SpacedColumn } from 'components/styled'
import { ExperienceUnit } from 'components'
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

const ExperiencesList = ({
  experiencesList,
  achievementsList,
}: Props): ReactElement => (
  <>
    <SpacedColumn spacing="2rem">
      {experiencesList.map((exp, idx) => (
        <ExperienceUnit key={`exp${idx}`} {...exp} />
      ))}
    </SpacedColumn>
    <Heading>and Achievements</Heading>
    <SpacedColumn spacing="1.5rem">
      {achievementsList.map((exp, idx) => (
        <ExperienceUnit key={`ach${idx}`} {...exp} type="achievement" />
      ))}
    </SpacedColumn>
  </>
)

export default ExperiencesList
