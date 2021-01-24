import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'

type Props = {
  title: string
  place: string
  descriptions?: string[]
  align?: string
  size?: string
}

const ContentContainer = styled(Column)<{
  size?: string
}>`
  width: ${({ size }) => (size === 'lg' ? '80%' : '75%')};
`

const Heading = styled.h1<{
  align?: string
}>`
  font-size: calc(0.9rem + 0.5vw);
  text-align: ${({ align }) => align || 'left'};
`

const SubHeading = styled.p<{
  align?: string
}>`
  font-weight: 600;
  font-size: calc(0.8rem + 0.4vw);
  text-align: ${({ align }) => align || 'left'};
  margin-top: 0.2rem;
`

const DescriptionList = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
  font-size: calc(0.8rem + 0.3vw);
`

const Description = styled.li`
  text-align: justify;
  line-height: 1.3;
`

export const Content = ({
  title,
  place,
  descriptions,
  align,
  size,
}: Props): ReactElement => (
  <ContentContainer
    align={align === 'right' ? 'flex-end' : 'flex-start'}
    size={size}
  >
    <Heading align={align}>{title}</Heading>
    <SubHeading align={align}>{place}</SubHeading>
    {descriptions && (
      <DescriptionList>
        {descriptions.map((desc, id) => (
          <Description key={id}>{desc}</Description>
        ))}
      </DescriptionList>
    )}
  </ContentContainer>
)
