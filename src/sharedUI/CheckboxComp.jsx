import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

    
export const CheckboxComp = props => {
    const { data } = props;
    return (
        <Checkbox value={data} />
    );
};
    
CheckboxComp.propTypes = {
   data: PropTypes.string
}

export default CheckboxComp;