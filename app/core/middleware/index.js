import { createLogger } from 'redux-logger'
import { middleware as reduxPack } from 'redux-pack'

import MarketplaceMiddleware from './marketplace'
import SessionMiddleware from './session'
import UIMiddleware from './ui'

const createMiddleware = isDevelopment => {
  // default middleware
  const middleware = [
    reduxPack,
    MarketplaceMiddleware,
    SessionMiddleware,
    UIMiddleware,
  ]

  // logger middleware in development
  if (isDevelopment) middleware.push(createLogger({ collapsed: true }))

  return middleware
}

export default createMiddleware
