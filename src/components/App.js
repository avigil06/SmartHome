import React, { Component } from 'react'
import { Switch, Route, Match, Redirect } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, SamplePage, NotFoundPage, LoginPage } from 'components'
import { GoogleTagManager } from 'containers'

import { auth, storageKey, isAuthenticated } from '../services/auth'

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

  state = {
    uid: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        window.localStorage.setItem(storageKey, user.uid)
        this.setState({uid: user.uid})
      } else {
        window.localStorage.removeItem(storageKey)
        this.setState({uid: null})
      }
    })
  }

  render() {
    return (
      <div>
        <GoogleTagManager />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} exact />
            <MatchWhenAuthorized path="/sample-page" component={SamplePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </div>
    )
  }

}

export default App
