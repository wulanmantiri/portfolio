import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import {
  Layout,
  Section,
  Sidebar,
  ContactBox,
  About,
  ExperiencesList,
  ProjectsList,
} from 'components'
import { useWindow, useMouseRef } from 'hooks'
import { EXPERIENCES_LIST } from 'constants/experiences'
import { ACHIEVEMENTS_LIST } from 'constants/achievements'
import { LANDING_PAGE_SECTIONS } from 'constants/section'

const LandingPage = (): ReactElement => {
  const theme = useContext(ThemeContext)
  const { evenSection, oddSection } = theme.colors

  const mouseRef = useMouseRef(LANDING_PAGE_SECTIONS)
  const { assignRef } = mouseRef

  const { isMobile } = useWindow()

  return (
    <Layout>
      {isMobile ? <></> : <Sidebar mouseRef={mouseRef} />}
      <Section
        bgColor={evenSection}
        containerRef={el => assignRef(el, 0)}
        id="about"
      >
        <About />
      </Section>
      <Section
        bgColor={oddSection}
        containerRef={el => assignRef(el, 1)}
        label="Experiences"
        id="experiences"
      >
        <ExperiencesList
          experiencesList={EXPERIENCES_LIST}
          achievementsList={ACHIEVEMENTS_LIST}
        />
      </Section>
      <Section
        bgColor={evenSection}
        containerRef={el => assignRef(el, 2)}
        label="Projects"
        id="projects"
      >
        <ProjectsList />
      </Section>
      <Section
        bgColor={oddSection}
        containerRef={el => assignRef(el, 3)}
        id="contact"
      >
        <ContactBox />
      </Section>
    </Layout>
  )
}

export default LandingPage
