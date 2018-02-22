import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as Identity from 'domains/identity'
import * as MarketPlace from 'domains/marketplace'
import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [Identity.name]: Identity.reducer,
  [MarketPlace.name]: MarketPlace.reducer,
  [UI.name]: UI.reducer,
})
