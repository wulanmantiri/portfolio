import React, { ReactElement, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { SpacedRow } from 'components/styled'
import { Icon as IconProps } from 'models/icon'

type Props = {
  url: string
  LeftIcon?: (_: IconProps) => ReactElement
  RightIcon?: (_: IconProps) => ReactElement
  text: string
}

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 2rem 0 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  background: linear-gradient(
      to left,
      transparent 50%,
      ${({ theme }) => theme.colors.border} 50%
    )
    right;
  background-size: 200%;
  transition: background 0.5s ease-out, color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    background-position: left;
  }

  @media (max-width: 600px) {
    padding-right: 1rem;
  }
`

export const ContactInfo = ({
  url,
  LeftIcon,
  RightIcon,
  text,
}: Props): ReactElement => {
  const [hovered, setHovered] = useState(false)
  const theme = useContext(ThemeContext)
  const { secondary, blue } = theme.colors

  return (
    <StyledLink
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SpacedRow align="center" spacing="1.2rem">
        {LeftIcon && <LeftIcon color={hovered ? blue : secondary} />}
        <p>{text}</p>
        {RightIcon && <RightIcon color={hovered ? blue : secondary} />}
      </SpacedRow>
    </StyledLink>
  )
}
