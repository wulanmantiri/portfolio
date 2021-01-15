import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { TimeText } from './TimeText'
import { Content } from './Content'
import { Separator } from './Separator'

type Props = {
  title: string
  time: string
  place: string
  descriptions?: string[]
  type?: string
}

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Achievement = ({ time, ...rest }: Props): ReactElement => (
  <Row>
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
