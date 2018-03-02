import React from 'react'
import { Route, makeRouteConfig } from 'found'

import App from 'core/containers/App'
import routes from 'core/routes/config'
import * as pages from 'pages'

export { routes }

export default makeRouteConfig(
  <Route Component={App}>
    <Route Component={pages.Home} path={routes.home.path} />
  </Route>
)
