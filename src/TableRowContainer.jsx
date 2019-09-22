import React, { Component } from 'react';
import { TableCell, TableRow, TableBody } from '@material-ui/core';
import TableCellData from './TableCellData';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import  { styles }  from './styles';
import { withStyles } from '@material-ui/core';

class TableRowContainer extends Component  { 
    render () {
        const { classes, rowData, cellTypes, addFunc, deleteFunc, editFunc, saveFunc, nameChangeFunc  } = this.props;
        return (
            <TableBody className={classes.root}>
            {rowData.map(row=> (
                <TableRow>
                    {row.data.map((val, index) =>
                    <TableCell id={`${val}at${index}`} align="center" >
                        <TableCellData cellId={`${val}at${index}`} cellType={cellTypes[index]} data={val} nameChangeFunc={nameChangeFunc} canEdit={row.isEditable}/>
                    </TableCell>
                    )} 
                    <TableCell align="center">
                        <ButtonGroup size="small" >
                        <Button onClick={row.isEditable? ()=> saveFunc(row.id):() => editFunc(row.id)}>{row.isEditable ? "Save" : "Edit"}
                        </Button>
                        <Button onClick={()=>addFunc(row.id)}>
                        <AddBoxIcon />
                        </Button>
                        <Button onClick={()=>deleteFunc(row.id)}>
                        <DeleteIcon />
                        </Button>
                        </ButtonGroup>
                    </TableCell>
                </TableRow>
           ))}
           </TableBody>
    )}   
}

export default withStyles(styles)(TableRowContainer);