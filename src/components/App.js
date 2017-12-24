import React, { Component } from 'react'
import { Switch, Route, Match, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { AdminPage, LightsPage, NotFoundPage, LoginPage } from 'components'
import { GoogleTagManager, LightsContainer } from 'containers'

import { auth, storageKey, isAuthenticated } from '../services/firebase'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const MatchWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={ {
        pathname: '/login',
        state: {from: renderProps.location}
      } } />
    )
  )}/>
)

class App extends Component {

  render() {
    return (
      <div>
        <GoogleTagManager />
        <ThemeProvider theme={theme}>
          <Switch>
            <MatchWhenAuthorized path="/" component={AdminPage} exact />
            <MatchWhenAuthorized path="/lights" component={LightsContainer} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
