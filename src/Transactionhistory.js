

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
import { Link } from 'react-router-dom';


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



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft:'2%',
    backgroundColor:'red',
  },
  txt1:{
    textDecoration:'none',
    color:'white',
}
}));

const Transactionhistory = ({cust}) => {
    const classes = useStyles();
    // const [cusid,setcusid]=useState('')
    // const [pass, setpass] = useState('');
    var b=window.location.pathname.split("/")[2];
    var path="/transaction/"+b
    
    
  

    return ( 
      <div style={{backgroundColor:"#FAE2E2"}}>        

        <TableContainer component={Paper}style={{width:"80%" ,align:"center",marginLeft:"auto",marginRight:"auto",border:"5px solid black"}}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              

              <StyledTableCell align="center">Account number</StyledTableCell>
         
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              

            </TableRow>
          </TableHead>
          <TableBody>
            {cust.map((row) => (
            
            
              <StyledTableRow key={row.frm_acc_no}   >
                  
                
                <StyledTableCell align="center">{row.to_acc_no}</StyledTableCell>
                <StyledTableCell align="center">{row.amount}</StyledTableCell>
                { row.tran_status ==="SUCCESS"? <StyledTableCell align="center" style={{color:"green",fontFamily:'Zilla Slab',fontWeight:"bold",fontSize:"17px"}}>{row.tran_status}</StyledTableCell>:<StyledTableCell align="center" style={{color:"red",fontFamily:'Zilla Slab',fontWeight:"bold",fontSize:"17px"}}>{row.tran_status}</StyledTableCell>}
                                
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

        <div>
        
        <Button
        variant="contained"
        color="primary"
        
        className={classes.button}
        endIcon={<SendIcon/>}
        
      ><Link to={path} className={classes.txt1}>
        GO back</Link>
      
      </Button>     
        </div>
      </TableContainer>
      </div>
     );
     
}
 
export default Transactionhistory;