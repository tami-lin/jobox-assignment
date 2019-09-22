import React, {Component} from 'react';
import {Grid, Paper, Table} from '@material-ui/core';
import TableHeader from './TableHeader';
import TableRowContainer from './TableRowContainer';
import { withStyles } from '@material-ui/styles';
import  { styles }  from './styles';
import { API_URL, JSON_EXAMPLE, DEFAULT_HEADER_TITLES, CELL_DATA_TYPES } from './constants';


class TableApplication extends Component { 
  constructor(props) {
    super(props);
    this.cellTypes = [];
    this.state = {rows: [], headerNames: DEFAULT_HEADER_TITLES };
    this.addTableRow = this.addTableRow.bind(this);
    this.deleteTableRow = this.deleteTableRow.bind(this);
    this.editTableRow= this.editTableRow.bind(this);
    this.saveTableRow = this.saveTableRow.bind(this);
  }

  /* upon loading, make api call to grab any initial data to populate table */
  componentDidMount() {
    this.getInitialTableData();
  }

  /* grab any initial data to populate table */
  getInitialTableData = () => {
    // make API call to extract and populate initial table data 
    // fetch(API_URL).then(res => res.json()).then(
    //   (data) => {
    //     this.setState({
    //       headerNames: this.createHeaderValues(data[0]),
    //       rows: this.createRowValues(data)
    //     });
    //   }
    // ) 
    this.setState({
      headerNames: this.createHeaderValues(JSON_EXAMPLE[0]),
      rows: this.createRowValues(JSON_EXAMPLE)
    });
    
  };

  /* allow custom components to populate cells */
  setCellType = name => {
    // logic to protocol what custom components to use 
    if(name === "certified") {
      return CELL_DATA_TYPES.checkbox;
    }
    return CELL_DATA_TYPES.text;
  };

  createHeaderValues = row => {
    const headers = [];
    Object.keys(row).forEach( name => {
      headers.push(name);
      this.cellTypes.push(this.setCellType(name));
    });
    return headers;
  };

  createRowValues = rows  => {
    const rowValues = [];
    rows.forEach((row, index) => {
      const values = [];
      let rowVals = {};
      Object.values(row).forEach(val => values.push(val));
      rowVals.data = values;
      rowVals.isEditable = false;
      rowVals.id = index;
      rowValues.push(rowVals);
    });
    return rowValues;
  };

  regenerateRowIds = () => {
    const { rows } = this.state;
    rows.forEach((row,index) => {
      row.id = index;
    });
    this.setState({ rows });
  };

  addTableRow = rowId => {
    const { rows } = this.state;
    const newData = [];
    rows[0].data.forEach(i => newData.push(""));
    rows.splice(rowId+1,0,{data: newData, isEditable: true});
    this.regenerateRowIds();
  }

  deleteTableRow = rowId => {
    const { rows } = this.state;
    rows.forEach((row,index) => {
      if(row.id === rowId) {
        rows.splice(rowId, 1);
      }
    });
    this.regenerateRowIds();
  };

  editTableRow = rowId => {
    const { rows } = this.state;
    rows.forEach(row=> {
      if(row.id === rowId) {
        row.isEditable = true;
      }
    });
    this.setState({ rows });
  };

  saveTableRow = rowId => {
    const { rows } = this.state;
    rows.forEach(row=> {
      if(row.id === rowId) {
        row.isEditable = false;
      }
    });
    this.setState({ rows });
  };

  render() {
    const { classes } = this.props;
    const { rows, headerNames } = this.state;
    return (
      <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
        <Grid item>
          <Paper> 
            Example Table 
          </Paper>
        </Grid>
        <Grid item className={classes.table}>
          <Table >
            <TableHeader style={styles.header} headerNames={headerNames}/>
            <TableRowContainer 
              rowData={rows} 
              cellTypes={this.cellTypes}
              addFunc={this.addTableRow}
              deleteFunc={this.deleteTableRow}
              editFunc={this.editTableRow} 
              saveFunc={this.saveTableRow}
              nameChangeFunc={this.handleNameChange} />
          </Table>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles) (TableApplication);

