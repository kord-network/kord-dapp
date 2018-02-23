import {
  BrowserProtocol,
  createBasenameMiddleware,
  createHistoryEnhancer,
  Actions as FarceActions,
  queryMiddleware,
} from 'farce'
import { createMatchEnhancer, Matcher } from 'found'
import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'

import { BASE_NAME, STATE_KEY } from 'core/constants'
import createMiddleware from 'core/middleware'
import rootReducer from 'core/reducers'
import routeConfig from 'core/routes'
import { WebStorage } from 'core/services'
import { isDevelopment } from 'core/util'

// create middleware
const middleware = createMiddleware(isDevelopment)

// create Farce middleware
const middlewares = [queryMiddleware]

// use basename middleware in production environment
if (!isDevelopment) {
  middlewares.push(createBasenameMiddleware({ basename: BASE_NAME }))
}

// create store with middleware - and devTools if dev
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  createHistoryEnhancer({
    protocol: new BrowserProtocol(),
    middlewares,
  }),
  createMatchEnhancer(new Matcher(routeConfig)),
  window.devToolsExtension && isDevelopment
    ? window.devToolsExtension()
    : f => f
)(createStore)

// persist stored state
const persistState = WebStorage.getSessionItem(STATE_KEY) || {}

// expose create store method
export const configureStore = (state = persistState) => {
  const store = finalCreateStore(rootReducer, Immutable.fromJS(state))

  // init router history module
  store.dispatch(FarceActions.init())

  // store state on change
  store.subscribe(() => {
    WebStorage.setSessionItem(STATE_KEY, {
      claims: store.getState().get('claims'),
      identity: store.getState().get('identity'),
      marketplace: store.getState().get('marketplace'),
      profile: store.getState().get('profile'),
      session: store.getState().get('session'),
    })
  })

  return store
}
