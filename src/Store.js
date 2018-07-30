import {applyMiddleware, compose, createStore} from 'redux'
import AppNavigator from './AppNavigator'
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {connect} from 'react-redux'
import {createReactNavigationReduxMiddleware, reduxifyNavigator,} from 'react-navigation-redux-helpers';
// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const AppWithNavigationState = connect(mapStateToProps)(App);
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger, middleware)))
export {
    store,
    AppWithNavigationState
}