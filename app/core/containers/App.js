import React, { Component } from 'react'
import {
  Box,
  Footer,
  Header,
  Main,
  Position,
  Text,
  theme,
  View,
} from 'jaak-primitives'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ThemeProvider } from 'styled-components'

import { Link, Logo } from 'core/components'
import { Error, Loader } from 'core/primitives'
import { routes } from 'core/routes'
import { customTheme } from 'core/style'
import { selectors as UISelectors } from 'domains/ui'

class App extends Component {
  getChildContext() {
    return {
      router: this.props.router,
    }
  }

  render() {
    const { children, error } = this.props

    const isRequesting = true

    return (
      <ThemeProvider theme={theme(customTheme)}>
        <View display="flex" flexDirection="column" size={['100%', 'auto']}>
          <Main>
            <Header>
              <Box align="center">
                <Link to={routes.home.path}>
                  <Logo maxWidth="114px" size={['29px', '114px']} />
                </Link>
              </Box>

              {isRequesting && (
                <Position position="absolute" right="8px" top="8px">
                  <Loader />
                </Position>
              )}

              {error && (
                <Error>
                  {error.map((e, key) => (
                    <Text color="error" key={key}>
                      {e.message}
                    </Text>
                  ))}
                </Error>
              )}
            </Header>

            {children}
          </Main>

          <Footer>Footer</Footer>
        </View>
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
