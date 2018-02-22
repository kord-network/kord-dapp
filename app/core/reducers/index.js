import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as UI from 'domains/ui'
import * as MarketPlace from 'domains/marketplace'

export default combineReducers({
  found: foundReducer,
  [UI.name]: UI.reducer,
  [MarketPlace.name]: MarketPlace.reducer,
})
