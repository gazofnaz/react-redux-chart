import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

/**
 * List all the settings
 */
class SettingsPage extends React.Component {

    constructor( props, context ){
        super( props, context );
        this.onChange = this.onChange.bind(this);
    }

    /**
     * Change handler
     *
     * @param event
     */
    onChange(event){

        // all settings
        let {settings} = this.props;
        // old setting from array
        let oldSetting = settings.find(setting => setting.identifier === event.target.name);
        // I think find returns something we can't mutate...
        let newSetting = Object.assign({}, oldSetting, {
            value: parseInt(event.target.value, 10)
        });

        this.props.actions.saveSetting(newSetting);
    }

    // Don't define new functions inside a render call, it impacts performance
    render(){
        // How do we know settings will always be props? Anyway, it keeps things shorter
        const {settings} = this.props;
        const {settingsTotal} = this.props;
        // This becomes quite clean
        return(
            <div className="row">
                <form className="form-horizontal">
                    {settings.map(setting =>
                        <div key={setting.identifier} className="form-group text-center">
                            <label
                                className="col-sm-3"
                                htmlFor={"form-setting-" + setting.identifier}>
                                {setting.title}
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    min={0}
                                    max={60}
                                    id={"form-setting-" + setting.identifier}
                                    type="range"
                                    name={setting.identifier}
                                    value={setting.value}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-sm-1">
                                <p>{setting.value}</p>
                            </div>
                        </div>
                    )}
                </form>
                <div className="row">
                    <div className="col-sm-3 total text-center">
                        <p className={this.props.totalError}>Total</p>
                    </div>
                    <div className="col-sm-offset-8 col-sm-1 text-center">
                        <p className={this.props.totalError}>{settingsTotal}</p>
                    </div>
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
    settings:       PropTypes.array.isRequired,
    settingsTotal:  PropTypes.number.isRequired,
    actions:        PropTypes.object.isRequired,
    totalError:     PropTypes.string
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

    // @todo: this feels like I'm mutating the store...

    // get values which can be optionally passed as query parameters
    let querySettings = ownProps.location.query;
    let stateSettings = state.courses;

    // loop through each query param
    for (let settingName in querySettings) {
        // check because for in is crap
        if (querySettings.hasOwnProperty(settingName)) {
            // if this param matches a setting
            let matchedSetting = stateSettings.find(setting => setting.identifier === settingName);
            // set the value
            stateSettings[matchedSetting.id]['value'] = parseFloat(querySettings[settingName]);
        }
    }

    const settingsTotal = sumSettingsValue(stateSettings, 'value');

    // @todo not sure if I should have this much logic in here
    let totalError = 'text-success';

    // too high
    if(settingsTotal > 60) {
        totalError = 'text-danger';
    }
    // too low
    else if(settingsTotal < 60){
        totalError = 'text-warning';
    }

    // @todo make that logic global to allow nav to be killed

    return{
        settings: stateSettings,
        settingsTotal,
        totalError
    };
}

/**
 * http://stackoverflow.com/a/23249575/978358
 *
 * @param items
 * @param prop
 * @returns {*}
 */
function sumSettingsValue(items, prop){
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
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
