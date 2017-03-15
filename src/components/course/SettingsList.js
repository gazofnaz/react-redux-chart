import React, {PropTypes} from 'react';
import SettingsListRow from './SettingsListRow';

/**
 * We like to keep all presentation out of the container components
 *
 * It can go in the dumb style components.
 *
 * @returns {XML}
 * @constructor
 */
const SettingsList = ({courses}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Setting</th>
                <th>Value</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(setting =>
                <SettingsListRow key={setting.title} setting={setting} />
            )}
            </tbody>
        </table>
    );
};

SettingsList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default SettingsList;