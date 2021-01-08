import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Layout, Section, Sidebar } from 'components'
import { useWindow } from 'hooks'

const LandingPage = (): ReactElement => {
  const theme = useContext(ThemeContext)
  const { isMobile } = useWindow()

  const { primary, section } = theme.colors

  return (
    <Layout>
      {isMobile ? <></> : <Sidebar />}
      <Section bgColor={primary}>
        <div>hello</div>
      </Section>
      <Section bgColor={section} title="Experiences">
        <div>hello</div>
      </Section>
      <Section bgColor={primary} title="Projects">
        <div>hello</div>
      </Section>
      <Section bgColor={section}>
        <div>hello</div>
      </Section>
    </Layout>
  )
}

export default LandingPage
