import * as types from './actionTypes';

// This is an action.
// It's called by the dispatcher and is handled by the reducer
export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_SETTINGS_SUCCESS,
        // in ES6 this means courses: courses. Sugaaaa
        courses
    };
}

export function updateCourseSuccess(course){
    return {
        type: types.UPDATE_SETTINGS_SUCCESS,
        course
    };
}

// This is a thunk. It fetches data from the api. Or not in this case
export function loadCourses(){
    return function(dispatch) {
        // Note: id's and ordering are important
        const settings = [
            {
                id:    0,
                identifier: "server_configuration",
                title: "Server Configuration",
                value: 2.5
            },
            {
                id:    1,
                identifier: "security",
                title: "Security",
                value: 2
            },
            {
                id:    2,
                identifier: "dev_ops",
                title: "Dev Ops",
                value: 3
            },
            {
                id:    3,
                identifier: "databases",
                title: "Databases",
                value: 2.5
            },
            {
                id:    4,
                identifier: "automated_testing",
                title: "Automated Testing",
                value: 4
            },
            {
                id:    5,
                identifier: "coding_backend",
                title: "Coding (Backend)",
                value: 4
            },
            {
                id:    6,
                identifier: "coding_frontend",
                title: "Coding (Front End)",
                value: 3.5
            },
            {
                id:    7,
                identifier: "design",
                title: "Design & UX",
                value: 3
            },
            {
                id:    8,
                identifier: "coding_js",
                title: "Coding (JS Frameworks)",
                value: 2.5
            },
            {
                id:    9,
                identifier: "documentation",
                title: "Documentation",
                value: 3
            }
        ];
        // cheating because we know it's hard coded
        dispatch(loadCoursesSuccess(settings));
        return settings;
    };
}

// Thunk to save a course
export function saveSetting(setting){
    return function(dispatch) {
        dispatch(updateCourseSuccess(setting));
    };
}