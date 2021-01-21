import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Layout, Section, Sidebar, ContactBox, About } from 'components'
import { useWindow, useMouseRef } from 'hooks'
import { ExperiencesList, ProjectsList } from 'containers'
import { BRIEF_EXPERIENCES_LIST } from 'constants/experiences'
import { BRIEF_ACHIEVEMENTS_LIST } from 'constants/achievements'
import { LANDING_PAGE_SECTIONS } from 'constants/section'

const LandingPage = (): ReactElement => {
  const theme = useContext(ThemeContext)
  const { primary, section } = theme.colors

  const mouseRef = useMouseRef(LANDING_PAGE_SECTIONS)
  const { assignRef } = mouseRef

  const { isMobile } = useWindow()

  return (
    <Layout>
      {isMobile ? <></> : <Sidebar mouseRef={mouseRef} />}
      <Section
        bgColor={primary}
        containerRef={el => assignRef(el, 0)}
        id="about"
      >
        <About />
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
        <ContactBox />
      </Section>
    </Layout>
  )
}

export default LandingPage
