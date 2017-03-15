import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';

/**
 * Here we apply our routes
 *
 * Parent is the App component, all nested routes are children of App
 */

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="settings" component={CoursesPage}/>
    </Route>
);