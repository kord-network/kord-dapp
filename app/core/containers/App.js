import React, { Component } from 'react'
import { theme, View } from 'jaak-primitives'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ThemeProvider } from 'styled-components'

import { customTheme } from 'core/style'
import { selectors as UISelectors } from 'domains/ui'

class App extends Component {
  getChildContext() {
    return {
      router: this.props.router,
    }
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme(customTheme)}>
        <View size={['100%', 'auto']}>{children}</View>
      </ThemeProvider>
    )
  }
}

App.childContextTypes = {
  router: PropTypes.object,
}

export default connect(
  createStructuredSelector({
    error: UISelectors.error,
    isRequesting: UISelectors.isRequesting,
  })
)(App)
