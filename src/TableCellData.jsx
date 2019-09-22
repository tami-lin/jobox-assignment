import React from 'react';
import PropTypes from 'prop-types';
import Textbox from './sharedUI/Textbox';
import CheckboxComp from './sharedUI/CheckboxComp';
import { CELL_DATA_TYPES } from './constants';
import { styles } from './styles';


export const TableCellData = props => { 
    const { cellId, cellType, canEdit, data, nameChangeFunc } = props;
    return (
        <div>
        <div style={styles.text}>
            {cellType === CELL_DATA_TYPES.text && <Textbox variant="outlined" cellId={cellId} canEdit={canEdit} data={data} nameChangeFunc={nameChangeFunc}/>}
        </div>
        <div style={styles.text}>
            {cellType === CELL_DATA_TYPES.checkbox && <CheckboxComp/>}
        </div>
     </div>
     );    
};

TableCellData.propTypes = {
    textbox: PropTypes.bool.isRequired
}

TableCellData.defaultProps = {
    textbox: false
}

export default TableCellData;
