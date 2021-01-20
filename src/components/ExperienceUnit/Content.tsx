import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Column } from 'components/styled'

type Props = {
  title: string
  place: string
  descriptions?: string[]
  align?: string
}

const ContentContainer = styled(Column)`
  width: 82%;
  @media (max-width: 600px) {
    width: 75%;
  }
`

const Heading = styled.h1<{
  align?: string
}>`
  font-size: calc(1rem + 0.4vw);
  text-align: ${({ align }) => align || 'left'};
`

const SubHeading = styled.p<{
  align?: string
}>`
  font-weight: 600;
  font-size: calc(0.9rem + 0.3vw);
  text-align: ${({ align }) => align || 'left'};
  margin-top: 0.2rem;
`

const DescriptionList = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
`

const Description = styled.li`
  text-align: justify;
  line-height: 1.3;
  font-size: calc(0.8rem + 0.2vw);
  &::before {
    content: '\u25C6';
    font-size: 0.8rem;
    vertical-align: 10%;
    padding-right: calc(0.5rem + 0.5vw);
  }
`

export const Content = ({
  title,
  place,
  descriptions,
  align,
}: Props): ReactElement => (
  <ContentContainer align={align === 'right' ? 'flex-end' : 'flex-start'}>
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
