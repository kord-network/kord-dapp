import React from 'react'
import { makeRouteConfig, Route } from 'found'

import App from 'core/containers/App'
import routes from 'core/routes/config'
import * as pages from 'pages'

export { routes }

export default makeRouteConfig(
  <Route Component={App}>
    <Route path={routes.home.path} Component={pages.Home} />
    <Route path={routes.graphide.path} Component={pages.GraphIDE} />
  </Route>
)
