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

const Heading = styled.h1`
  font-size: calc(1rem + 0.4vw);
  text-align: right;
`

const SubHeading = styled.p`
  font-weight: 600;
  font-size: calc(0.8rem + 0.3vw);
  text-align: justify;
  margin-top: 0.2rem;
`

const DescriptionList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`

const Description = styled.li`
  text-align: justify;
  &::before {
    content: '\u2749';
    margin-right: 0.5rem;
  }
`

export const Content = ({
  title,
  place,
  descriptions,
  align,
}: Props): ReactElement => (
  <ContentContainer align={align}>
    <Heading>{title}</Heading>
    <SubHeading>{place}</SubHeading>
    {descriptions && (
      <DescriptionList>
        {descriptions.map((desc, id) => (
          <Description key={id}>{desc}</Description>
        ))}
      </DescriptionList>
    )}
  </ContentContainer>
)
