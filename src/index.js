import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // attaches the store to react container components
import { Router, browserHistory } from 'react-router'; // browserHistory gives nice clean urls, html5 push state. Hash urls are available
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css'; // webpack can import css (what about scss?)


/**
 * Instance of the store. Can pass override of state here if desired. Sometimes useful if state is populated from server
 * @type {*}
 */
const store = configureStore();
store.dispatch(loadCourses());

/**
 * Now we render the router so the user can see the content
 */

render(
    // Store can now be accessed anywhere
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);