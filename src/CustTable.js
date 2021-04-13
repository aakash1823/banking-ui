

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import axios from "axios";

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
    marginLeft:'2%',
    
    backgroundColor:'black',
  },
});

const CustTable = ({cust}) => {
    const classes = useStyles();
  
    async function handleSubmit1(cusid){
        console.log(cusid)
        axios.post('http://localhost:8080/view', {
            cusid
          })
          .then(function (response) {
            console.log(response.data);
            if(response.data==="User Not Foundd!!"){
                console.log("bye");

            }
            if(response.data==="Success"){
                window.location="/transaction/"+cusid;

            }
          })
          
    }
    
    const handleSubmit=(value)=>{
        console.log(value)
        console.log("hi")
        
     
        const a={value};
        console.log(a)
        
        var d=handleSubmit1(value)
        

    }

    return ( 
      
                
        <TableContainer component={Paper}>
        
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Account Number</StyledTableCell>

              <StyledTableCell align="center"> First Name</StyledTableCell>
         
              <StyledTableCell align="center"> Last Name</StyledTableCell>
              <StyledTableCell align="center">Account type</StyledTableCell>
              <StyledTableCell align="center">Account Status</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">For Transaction and other details</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {cust.map((row) => (
            console.log(row.custid),
            
              <StyledTableRow key={row.custid}   >
                  
                <StyledTableCell component="th" scope="row" align="center">
                  {row.acnumber}
                </StyledTableCell>
                <StyledTableCell align="center">{row.fname}</StyledTableCell>
                <StyledTableCell align="center">{row.ltname}</StyledTableCell>
                <StyledTableCell align="center">{row.atype}</StyledTableCell>
                <StyledTableCell align="center">{row.astatus}</StyledTableCell>
                <StyledTableCell align="center">{row.Email}</StyledTableCell>
                <StyledTableCell align="center">{row.opening_balance}</StyledTableCell>
                <StyledTableCell align="center">
                    
                    <form >
                
                    <Button
        variant="contained"
        color="primary"
        
        className={classes.button}
        endIcon={<SendIcon/>}
        onClick={()=>handleSubmit(row.custid)}
      >
        Proceed
      
      </Button>
                
                </form>
                </StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     );
}
 
export default CustTable;