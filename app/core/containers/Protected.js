import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { routes } from 'core/routes'
import { View } from 'core/primitives'
import {
  actions as SessionActions,
  selectors as SessionSelectors,
} from 'domains/session'

class Protected extends Component {
  componentDidMount() {
    const { isLoggedIn } = this.props

    // redirect users to login if they are unauthorised
    if (!isLoggedIn) return this.redirectUnauthorisedUser()
  }

  componentWillUpdate(nextProps) {
    const { isLoggedIn } = nextProps

    // redirect users to login if they become unauthorised
    if (!isLoggedIn) return this.redirectUnauthorisedUser()
  }

  redirectUnauthorisedUser() {
    const { router } = this.context

    return router.push(routes.login.path)
  }

  render() {
    const { children } = this.props

    return <View size={['100%', 'auto']}>{children}</View>
  }
}

Protected.contextTypes = {
  router: PropTypes.object,
}

export default connect(
  createStructuredSelector({
    isLoggedIn: SessionSelectors.isLoggedIn,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...SessionActions }, dispatch),
  })
)(Protected)
