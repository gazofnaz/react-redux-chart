import React, {PropTypes} from 'react';

const SettingsListRow = ({setting}) => {
    return (
        <tr>
            <td>
                {setting.title}
            </td>
            <td>
                {setting.value}
            </td>
            <td>
                <a href="#" target="_blank">edit</a>
            </td>
        </tr>
    );
};

SettingsListRow.propTypes = {
    setting: PropTypes.object.isRequired
};

export default SettingsListRow;