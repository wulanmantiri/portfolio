import React, {
  ReactElement,
  useContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react'
import { ThemeContext } from 'styled-components'

import { Layout, Section, Sidebar } from 'components'
import { useWindow, useMouseRef } from 'hooks'
import Projects from './Projects'

const LandingPage = (): ReactElement => {
  const theme = useContext(ThemeContext)
  const { primary, section } = theme.colors

  const { isMobile } = useWindow()

  const introRef = useMouseRef()
  const experiencesRef = useMouseRef()
  const projectsRef = useMouseRef()
  const contactRef = useMouseRef()
  const sections = useMemo(
    () => [
      {
        path: '',
        ref: introRef,
      },
      {
        path: '#experiences',
        ref: experiencesRef,
      },
      {
        path: '#projects',
        ref: projectsRef,
      },
      {
        path: '#contact',
        ref: contactRef,
      },
    ],
    [introRef, experiencesRef, projectsRef, contactRef],
  )

  const handleMouseOver = useCallback(
    (e: MouseEvent) => {
      let isAnySectionHovered = false
      let activeRefId = 0
      sections.forEach(({ ref }, id) => {
        const containerRef = ref.ref.current
        if (containerRef && containerRef.contains(e.target as HTMLElement)) {
          isAnySectionHovered = true
          activeRefId = id
        }
      })
      if (isAnySectionHovered) {
        sections.forEach(({ ref }, id) => {
          if (activeRefId === id) {
            ref.setActive(true)
          } else {
            ref.setActive(false)
          }
        })
      }
    },
    [sections],
  )

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseOver)
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseOver])

  return (
    <Layout>
      {isMobile ? <></> : <Sidebar sections={sections} />}
      <Section bgColor={primary} containerRef={introRef.ref} id="">
        <div>hello</div>
      </Section>
      <Section
        bgColor={section}
        title="Experiences"
        containerRef={experiencesRef.ref}
        id="experiences"
      >
        <div>hello</div>
      </Section>
      <Section
        id="projects"
        bgColor={primary}
        title="Projects"
        containerRef={projectsRef.ref}
      >
        <Projects />
      </Section>
      <Section bgColor={section} containerRef={contactRef.ref} id="contact">
        <div>hello</div>
      </Section>
    </Layout>
  )
}

export default LandingPage
