import React, { ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContextProvider from 'store'
import { LandingPage, ExperiencesPage } from 'containers'

const Routes = (): ReactElement => (
  <ContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/experiences/" component={ExperiencesPage} />
      </Switch>
    </BrowserRouter>
  </ContextProvider>
)

export default Routes
