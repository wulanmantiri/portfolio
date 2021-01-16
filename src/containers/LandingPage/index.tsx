import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Layout, Section, Sidebar } from 'components'
import { useWindow, useMouseRef } from 'hooks'
import { ExperiencesList, ProjectsList } from 'containers'
import { BRIEF_EXPERIENCES_LIST } from 'constants/experiences'
import { BRIEF_ACHIEVEMENTS_LIST } from 'constants/achievements'

const LandingPage = (): ReactElement => {
  const theme = useContext(ThemeContext)
  const { primary, section } = theme.colors

  const { isMobile } = useWindow()
  const mouseRef = useMouseRef(4)

  const assignRef = (el: HTMLDivElement, idx: number) => {
    mouseRef.refs.current[idx] = el
  }

  return (
    <Layout>
      {isMobile ? <></> : <Sidebar mouseRef={mouseRef} />}
      <Section bgColor={primary} containerRef={el => assignRef(el, 0)}>
        <div>hello</div>
      </Section>
      <Section
        bgColor={section}
        containerRef={el => assignRef(el, 1)}
        label="Experiences"
        id="experiences"
      >
        <ExperiencesList
          experiencesList={BRIEF_EXPERIENCES_LIST}
          achievementsList={BRIEF_ACHIEVEMENTS_LIST}
        />
      </Section>
      <Section
        bgColor={primary}
        containerRef={el => assignRef(el, 2)}
        label="Projects"
        id="projects"
      >
        <ProjectsList />
      </Section>
      <Section
        bgColor={section}
        containerRef={el => assignRef(el, 3)}
        id="contact"
      >
        <div>hello</div>
      </Section>
    </Layout>
  )
}

export default LandingPage
