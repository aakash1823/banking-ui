import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



import Button from '@material-ui/core/Button';
import { useState } from "react";

import { Typography } from '@material-ui/core';
import ReactFontLoader from 'react-font-loader';
import Transaction from './Transaction';
import PaymentIcon from '@material-ui/icons/Payment';
import { Link } from 'react-router-dom';
import HistoryIcon from '@material-ui/icons/History';
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//     backgroundColor:"#FAE2E2",
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  button: {
    // margin: theme.spacing(1),
    marginTop:'2%',
    marginBottom:'0.5%',
    backgroundColor:'red',
  },
  button1:{
    marginTop:'2%',
    backgroundColor:'red',
    marginBottom:'2%',
  },
  txt1:{
    textDecoration:'none',
    color:'white',
    
},
img:{
  marginTop:"2%",
  border:"5px solid black",
  
},
});

const CustTable1 = ({cust}) => {
    const classes = useStyles();
    // const [cusid,setcusid]=useState('')
    // const [pass, setpass] = useState('');
    const [trans,settrans]=useState(false)
    const [button,setbutton]=useState(true)
    const [button1,setbutton1]=useState(true)
    var b=window.location.pathname.split("/")[2];

    var history="/history/"+b
    console.log(cust[0].image)
    const handleSubmit=()=>{
      setbutton(false)
      setbutton1(false)
      settrans(true)
    }
    
    return ( 
      <div  style={{backgroundColor:"#FAE2E2",height:'100%'}}>
        
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap' />
        <img src={"/"+cust[0].image+".jpg"} className={classes.img} width="300" height="350" alt="Customer"></img>
        <Typography variant="h4" style={{fontFamily:'Zilla Slab',paddingTop:"2%"}}>Name : {cust[0].fname+' '+cust[0].ltname}</Typography>
        <Typography variant="h4" style={{fontFamily:'Zilla Slab'}}>Account no: {cust[0].acnumber}</Typography>
        <Typography variant="h4" style={{fontFamily:'Zilla Slab'}}>Email: {cust[0].Email}</Typography>
        <Typography variant="h4" style={{fontFamily:'Zilla Slab'}}>Account type: {cust[0].atype}</Typography>
        <Typography variant="h4" style={{fontFamily:'Zilla Slab',color:"red"}}>Balance: {cust[0].opening_balance}</Typography>
        {button && <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
        endIcon={<PaymentIcon/>}
        
      >
        Click here for transaction
      
      </Button>}
      <div>
      {button1 && <Button
        variant="contained"
        color="primary"
        
        className={classes.button1}
        endIcon={<HistoryIcon/>}
        
      ><Link to={history} className={classes.txt1}>
        Transaction history</Link>
      
      </Button>}
      </div>
        {trans && <Transaction/>}

      </div>
    
    
      
     );
}
 
export default CustTable1;