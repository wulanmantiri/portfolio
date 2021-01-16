import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Experience as Props } from 'models/experience'
import { TimeText } from './TimeText'
import { Content } from './Content'
import { Separator } from './Separator'

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
    <Content align="flex-end" {...rest} />
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

export default ExperienceUnit
