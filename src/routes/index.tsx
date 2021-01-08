import React, { ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContextProvider from 'store'
import { LandingPage } from 'containers'

const Routes = (): ReactElement => (
  <ContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </ContextProvider>
)

export default Routes
