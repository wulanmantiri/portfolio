import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { Row, SpacedRow, SpacedColumn } from 'components/styled'
import { CodeIcon } from 'components'

type Props = {
  name: string
  description: string
  imageUrl: string
  websiteUrl?: string
  repo: {
    label?: string
    url: string
  }[]
}

const Container = styled.div`
  position: relative;
  width: 45%;
  margin-bottom: 4rem;

  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`

const ProjectImage = styled.img<{
  hovered: boolean
}>`
  position: relative;
  z-index: 2;
  max-width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;

  @media (min-width: 600px) {
    transition: 0.5s;
    transform: ${({ hovered }) => (hovered ? 'translate(0, -3.8rem)' : '0')};
  }
`

const Placeholder = styled(SpacedColumn)`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  padding: 0.2rem 0.2rem 0;

  @media (max-width: 600px) {
    position: relative;
  }
`

const Heading = styled.h1`
  font-weight: 700;
  font-size: calc(1rem + 0.1vw);
`

const Description = styled.p`
  font-size: calc(0.8rem + 0.1vw);
  text-align: justify;
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
            {repo.map((r, idx) => (
              <SpacedRow key={idx} align="center" spacing="0.2rem">
                {r.label && <Description>{r.label}:</Description>}
                <CodeIcon url={r.url} />
              </SpacedRow>
            ))}
          </SpacedRow>
        </Row>
        <Description>{description}</Description>
      </Placeholder>
    </Container>
  )
}

export default ProjectCard
