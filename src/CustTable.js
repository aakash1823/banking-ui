

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
import ReactFontLoader from 'react-font-loader';

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
    borderRadius:"0px 20px 20px 0px",
    backgroundColor:'black',
  },
  img:{
    width:'100%',
    height:'130px',
marginLeft:"2%",
marginRight:"0%",
paddingRight:"0px",
  },
  img1:{
    width:'10%',


  }
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
        
        handleSubmit1(value)
        

    }

    return ( 
      
      <div style={{backgroundColor:"#FAE2E2"}}>        
        <TableContainer component={Paper}style={{width:"80%" ,align:"center",marginLeft:"auto",marginRight:"auto",border:"5px solid black"}}>
       <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap' />

        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>Customer Image</StyledTableCell>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>Account Number</StyledTableCell>

              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}> First Name</StyledTableCell>
         
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}> Last Name</StyledTableCell>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>Account type</StyledTableCell>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>Account Status</StyledTableCell>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>Email</StyledTableCell>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>Amount</StyledTableCell>
              <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"15px"}}>For Transaction and other details</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {cust.map((row) => (
            
              <StyledTableRow key={row.custid}   >
                  
                <StyledTableCell component="th" scope="row" align="left"className={classes.img1}>
                  <img src={row.image+".jpg"} className={classes.img} alt="Customer "></img>
                </StyledTableCell>
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px"}}>
                {row.acnumber}
                </StyledTableCell>
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px"}}>{row.fname}</StyledTableCell>
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px"}}>{row.ltname}</StyledTableCell>
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px"}}>{row.atype}</StyledTableCell>
                
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px"}}>{row.astatus}</StyledTableCell>
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px"}}>{row.Email}</StyledTableCell>
                <StyledTableCell align="center"style={{fontFamily:'Zilla Slab',fontSize:"20px",color:'green',fontWeight:"bold"}}>{row.opening_balance}</StyledTableCell>
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
      </div>
     );
}
 
export default CustTable;