

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';

import ImportExportIcon from '@material-ui/icons/ImportExport';
import IconButton from '@material-ui/core/IconButton';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearIcon from '@material-ui/icons/Clear';
import ReactFontLoader from 'react-font-loader';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  button: {
    // margin: theme.spacing(1),
    marginLeft:'2%',
    
    backgroundColor:'black',
  },

});

const AllTransac = ({cust}) => {
    const classes = useStyles();

    return ( 
      
                
        <TableContainer component={Paper}>
                <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap' />

        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"> From Account Number</StyledTableCell>

              <StyledTableCell align="center"> To Account Number</StyledTableCell>
         
              <StyledTableCell align="center"> Amount Transferred</StyledTableCell>
              <StyledTableCell align="center"> Transaction Status</StyledTableCell>

              
            </TableRow>
          </TableHead>
          <TableBody>
            {cust.map((row) => (
            // console.log(row.custid),
            
              <StyledTableRow   >
                  
                <StyledTableCell component="th" scope="row" align="center">
                  {row.frm_acc_no}
                </StyledTableCell>
                <StyledTableCell align="center">{row.to_acc_no}</StyledTableCell>
                <StyledTableCell align="center">{row.amount}</StyledTableCell>
                { row.tran_status ==="SUCCESS"? <StyledTableCell align="center" style={{color:"green",fontFamily:'Zilla Slab',fontWeight:"bold",fontSize:"17px"}}>{row.tran_status}</StyledTableCell>:<StyledTableCell align="center" style={{color:"red",fontFamily:'Zilla Slab',fontWeight:"bold",fontSize:"17px"}}>{row.tran_status}</StyledTableCell>}
                
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <div style={{marginLeft:"75%"}}>
        <IconButton  color="inherit" aria-label="menu">
            <Link to="/newestfirst" className={classes.lg1}><ImportExportIcon /></Link>
            
          </IconButton>
          <IconButton  color="inherit" aria-label="menu">
            <Link to="/success" className={classes.lg}><DoneOutlineIcon /></Link>
            
          </IconButton>
          <IconButton  color="inherit" aria-label="menu">
            <Link to="/failure" className={classes.lg}><ClearIcon /></Link>
            
          </IconButton>
        
        </div>
      </TableContainer>
     );
}
 
export default AllTransac;