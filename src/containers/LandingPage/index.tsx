import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Layout, Section, Sidebar } from 'components'
import { useWindow, useMouseRef } from 'hooks'
import { LANDING_PAGE_SECTIONS } from 'constants/section'

const LandingPage = (): ReactElement => {
  const theme = useContext(ThemeContext)
  const { primary, section } = theme.colors

  const { isMobile } = useWindow()

  const mouseRef = useMouseRef(LANDING_PAGE_SECTIONS)

  const sectionBgColor = (idx: number) => {
    return idx % 2 === 0 ? section : primary
  }

  return (
    <Layout>
      {isMobile ? <></> : <Sidebar mouseRef={mouseRef} />}
      <>
        {LANDING_PAGE_SECTIONS.map(({ label }, idx) => (
          <Section
            bgColor={sectionBgColor(idx)}
            containerRef={(el: HTMLDivElement) =>
              (mouseRef.refs.current[idx] = el)
            }
            label={label}
            key={idx}
          >
            <div>hello</div>
          </Section>
        ))}
      </>
    </Layout>
  )
}

export default LandingPage
