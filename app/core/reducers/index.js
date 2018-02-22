import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as MarketPlace from 'domains/marketplace'
import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [MarketPlace.name]: MarketPlace.reducer,
  [UI.name]: UI.reducer,
})
