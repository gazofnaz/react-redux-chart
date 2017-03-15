import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// This is an action.
// It's called by the dispatcher and is handled by the reducer
export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_COURSES_SUCCESS,
        // in ES6 this means courses: courses. Sugaaaa
        courses
    };
}

// This is a thunk. It fetches data from the api
export function loadCourses(){
    return function(dispatch) {
        // returns a promise
        // anonymous call after success
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}