import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { Row, SpacedRow, SpacedColumn } from 'components/styled'
import { CodeIcon } from 'components'
import { generateHighlightedText } from 'utils/generateHighlightedText'

type Props = {
  name: string
  description: string
  imageUrl: string
  websiteUrl?: string
  repo?: {
    label?: string
    url: string
  }[]
}

const Container = styled.div`
  position: relative;
  width: 45%;
  margin-bottom: calc(2rem + 2.5vw);

  @media (max-width: 800px) {
    width: 100%;
  }
`

const ProjectImage = styled.img<{
  hovered: boolean
}>`
  position: relative;
  z-index: 2;
  width: 100%;
  object-fit: cover;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.border};

  @media (min-width: 800px) {
    transition: 0.5s ease;
    transform: ${({ hovered }) =>
      hovered ? 'translate(0, calc(-2rem - 1.8vw))' : '0'};
  }
`

const Placeholder = styled(SpacedColumn)`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  padding: calc(0.1rem + 0.2vw) 0.2rem;

  @media (max-width: 800px) {
    position: relative;
  }
`

const Heading = styled.p`
  font-weight: 700;
  font-size: calc(1rem + 0.1vw);
`

const Description = styled.p`
  font-size: calc(0.8rem + 0.1vw);
  text-align: justify;

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 0.8rem;
  }
`

const ProjectCard = ({
  name,
  description,
  imageUrl,
  websiteUrl,
  repo,
}: Props): ReactElement => {
  const [hovered, setHovered] = useState(false)

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={websiteUrl} target="_blank" rel="noreferrer">
        <ProjectImage src={imageUrl} alt={name} hovered={hovered} />
      </a>
      <Placeholder spacing="0.1rem">
        <Row justify="space-between" width="100%" align="center">
          <Heading>{name}</Heading>
          <SpacedRow align="center">
            {repo &&
              repo.map((r, idx) => (
                <SpacedRow key={idx} align="center" spacing="0.2rem">
                  {r.label && <Description>{r.label}:</Description>}
                  <CodeIcon url={r.url} />
                </SpacedRow>
              ))}
          </SpacedRow>
        </Row>
        <Description>{generateHighlightedText(description)}</Description>
      </Placeholder>
    </Container>
  )
}

export default ProjectCard
