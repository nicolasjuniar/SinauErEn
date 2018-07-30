import { combineReducers } from 'redux';
import AppNavigator from '../AppNavigator'
import HomeReducer from './HomeReducer'

const navReducer = (state , action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
};

const appReducer = combineReducers({
    nav: navReducer,
    HomeReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;