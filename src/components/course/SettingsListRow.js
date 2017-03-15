import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const SettingsListRow = ({setting}) => {

    function onChange(){
        return;
    }

    const errors = {};

    return (
        <TextInput
            name="value"
            label={setting.title}
            value= {setting.value}
            onChange={onChange}
            error={errors.title}
        />
    );
};

SettingsListRow.propTypes = {
    setting: PropTypes.object.isRequired
};

export default SettingsListRow;