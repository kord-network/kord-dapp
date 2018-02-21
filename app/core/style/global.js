import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

injectGlobal`
  ${normalize()}

  * {
  	box-sizing: inherit;
  }

  html {
  	box-sizing: border-box;
  }

  html, body, #Root, #App {
    height: 100%;
    min-height: 100%;
  }

  body {
    font-family: 'Montserrat', helvetica, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
`
