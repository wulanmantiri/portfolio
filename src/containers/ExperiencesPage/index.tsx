import React, { ReactElement } from 'react'

import { Section, Layout } from 'components'
import { ExperiencesList } from 'containers'
import { COMPLETE_EXPERIENCES_LIST } from 'constants/experiences'
import { COMPLETE_ACHIEVEMENTS_LIST } from 'constants/achievements'

const ExperiencesPage = (): ReactElement => (
  <Layout>
    <Section label="Experiences">
      <ExperiencesList
        experiencesList={COMPLETE_EXPERIENCES_LIST}
        achievementsList={COMPLETE_ACHIEVEMENTS_LIST}
      />
    </Section>
  </Layout>
)

export default ExperiencesPage
