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
const SettingsList = ({settings}) => {
    return (
        <form className="form-horizontal">
            {settings.map(setting =>
                <SettingsListRow key={setting.title} setting={setting} />
            )}
        </form>
    );
};

SettingsList.propTypes = {
    settings: PropTypes.array.isRequired
};

export default SettingsList;