import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { ProjectCard } from 'components'
import { PROJECTS } from 'constants/projects'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectsList = (): ReactElement => (
  <Container>
    {PROJECTS.map((project, idx) => (
      <ProjectCard key={`project${idx}`} {...project} />
    ))}
  </Container>
)

export default ProjectsList
