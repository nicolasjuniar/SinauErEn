import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {AppWithNavigationState, store} from "./Store"

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}