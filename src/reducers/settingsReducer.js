import * as types from '../actions/actionTypes';

// Reducer takes current state and an action and returns the new state
export default function courseReducer(state =[], action){
    switch (action.type){

        case types.LOAD_SETTINGS_SUCCESS:
            // state is immutable. so we can't do this:
            // state.push(action.courses);
            // return state;

            return action.courses;

        // can't just change the course in the state array
        case types.UPDATE_SETTINGS_SUCCESS:{
            // Remove the old value from the array (creates new array)
            let cleanedSettings = state.slice(action.course.id + 1);
            // Insert the updated value into the same index
            cleanedSettings.splice(action.course.id, 0, action.course);
            return cleanedSettings;
        }

        default:
            return state;
    }

}