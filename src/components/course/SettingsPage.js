import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import SettingsList from '../course/SettingsList';

/**
 * List all the settings
 */
class SettingsPage extends React.Component {

    constructor( props, context ){
        super( props, context );
        const settingsTotal = this.sumSettingsValue(props.settings, 'value');

        // Local state for total for now... may not be sufficient
        this.state ={
            settingsTotal
        };
    }

    /**
     * http://stackoverflow.com/a/23249575/978358
     *
     * @param items
     * @param prop
     * @returns {*}
     */
    sumSettingsValue(items, prop){
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0);
    }

    // Don't define new functions inside a render call, it impacts performance
    render(){
        // How do we know settings will always be props? Anyway, it keeps things shorter
        const {settings} = this.props;
        // This becomes quite clean
        return(
            <div>
                <SettingsList
                    settings={settings}
                />
                <div>
                    Total: {this.state.settingsTotal}
                </div>
            </div>
        );
    }
}

/**
 * I feel like this was defined somewhere as a requirement...
 * @type {{}}
 */
SettingsPage.propTypes = {
    settings: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

/**
 * Returns the properties we'd like to see exposed in our project, pulled from the current state
 *
 * Allows us to call this.props.settings
 *
 * @param state
 * @param ownProps
 */
function mapStateToProps(state, ownProps){
    return{
        // get course data from in the store, i.e. from in the reducer
        settings: state.courses
    };
}

/**
 * Determines what actions are available in the component
 *
 * Allows us to call this.props.createCourse() for dispatchers
 *
 * Once this is defined, connect will no longer inject a dispatch property to our component
 *
 */
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// Connect is a higher order function that does some more magic and creates container components
// Connect will inject a dispatcher by default to this.props.
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

// longer version
// const temp = connect(mapStateToProps, mapDispatchToProps)
// export default temp(SettingsPage);
