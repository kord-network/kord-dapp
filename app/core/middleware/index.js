import { createLogger } from 'redux-logger'
import { middleware as reduxPack } from 'redux-pack'

import SessionMiddleware from './session'
import UIMiddleware from './ui'

const createMiddleware = isDevelopment => {
  // default middleware
  const middleware = [reduxPack, SessionMiddleware, UIMiddleware]

  // logger middleware in development
  if (isDevelopment) middleware.push(createLogger({ collapsed: true }))

  return middleware
}

export default createMiddleware
