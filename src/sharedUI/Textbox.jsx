import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const Textbox = props => {

const { data, cellId, canEdit,nameChangeFunc } = props;
    return (
       <TextField fullwidth={true} disabled={!canEdit} value={data} 
       onChange={e => nameChangeFunc(e, cellId)}/>
    );
};
    
Textbox.propTypes = {
    data: PropTypes.string
}

export default Textbox;