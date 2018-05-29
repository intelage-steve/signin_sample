/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ExamplePage from './ExamplePage'
import theme from './theme/theme';

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <ExamplePage />
      </MuiThemeProvider>
    )
  }
}

export default App;