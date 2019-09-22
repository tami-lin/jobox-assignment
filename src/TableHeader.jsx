import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export const TableHeader = props => { 
    const { headerNames } = props;
    return (
         <TableHead>
             <TableRow>
                {headerNames.map(header=> (
                    <TableCell align="center">
                        {header}
                    </TableCell>
                ))}
                    <TableCell key="operations">
                        Operations        
                    </TableCell>
             </TableRow>
        </TableHead>
    );    
};

export default TableHeader;
