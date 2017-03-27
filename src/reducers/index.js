import {combineReducers} from 'redux';
import courses from './settingsReducer';

/**
 * Apply all the reducers here, or something
 * Useful when we have more than one reducer.
 */
const rootReducer = combineReducers({
    // shorthand property names
    courses
});

export default rootReducer;