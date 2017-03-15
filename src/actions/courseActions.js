import * as types from './actionTypes';

// This is an action.
// It's called by the dispatcher and is handled by the reducer
export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_COURSES_SUCCESS,
        // in ES6 this means courses: courses. Sugaaaa
        courses
    };
}

// This is a thunk. It fetches data from the api. Or not in this case
export function loadCourses(){
    return function(dispatch) {
        const settings = [
            {
                id: 1,
                title: "Server Configuration", value:
                2.5
            },
            {
                id: 2,
                title: "Security",
                value: 2
            },
            {
                id: 3,
                title: "Dev Ops",
                value: 3
            },
            {
                id: 4,
                title: "Databases", value:
                2.5
            },
            {
                id: 5,
                title: "Automated Testing",
                value: 4
            },
            {
                id: 6,
                title: "Coding (Backend)",
                value: 4
            },
            {
                id: 7,
                title: "Coding (Front End)", value:
                3.5
            },
            {
                id: 8,
                title: "Design & UX",
                value: 3
            },
            {
                id: 9,
                title: "Coding (JS Frameworks)", value:
                2.5
            },
            {
                id: 10,
                title: "Documentation",
                value: 3
            }
        ];
        // cheating because we know it's hard coded
        dispatch(loadCoursesSuccess(settings));
        return settings;
    };
}