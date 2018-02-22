import React from 'react'
import { render } from 'react-dom'

import Root from 'core/containers/Root'
import { Sentry } from 'core/services'
import { isDevelopment } from 'core/util'

// STATIC DATA FILES
import './data'

import 'core/style/global'

const rootEl = document.getElementById('Root')

// init Sentry
if (!isDevelopment) Sentry.install()

render(<Root />, rootEl)
