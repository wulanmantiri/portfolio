import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import { Column } from 'components/styled'
import { generateHighlightedText } from 'utils/generateHighlightedText'

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
          <Description key={id}>{generateHighlightedText(desc)}</Description>
        ))}
      </DescriptionList>
    )}
  </ContentContainer>
)

// Animated version
export const AnimatedContent = styled(Content)<{
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
