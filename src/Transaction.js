import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useState } from "react";
import axios from "axios";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import useFetch from "./useFetch";
import Popup from "./Popup";
import { Typography } from '@material-ui/core';
import ReactFontLoader from 'react-font-loader';
const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft:'2%',
    backgroundColor:'red',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "120px",

  },
  b:{
    marginTop:"2%",
  },
  txt:{
    marginTop:"1.25%",
    width:'220px',
    height:'30px',
  },
  txt1:{
    textDecoration:'none',
    color:'white',
}
}));

const Transaction = () => {
  const classes = useStyles();

    const [accountno,setaccountno]=useState('')
    const [amount,setamount]=useState('')
    const [pop1, setpop1] = useState(false);
    const [c,setinvalid]=useState("AMOUNT IS INSUFFICIENT OR INCORRECT ACCOUNT NUMBER")
    var b=window.location.pathname.split("/")[2];
    // const[k,setpath]=useState("/transaction/"+b)
    // const[history,sethistory]=useState("/transaction/history/"+b)
    const[l,setpopuphead]=useState("")
    // const [age, setAge] = React.useState('');
    const {data: id } = useFetch('/selection/'+b)
    console.log(id)
    var history="/history/"+b
    async function handleSubmit1(accountno,amount,b){
        axios.post('/trans ', {
            accountno,amount,b
          })
          .then(function (response) {
            console.log(response.data);
            if(response.data==="INVALID ACCOUNT NO"){
                setpopuphead("INVALID CREDENTIALS")
                setinvalid("INVALID ACCOUNT NO")
                setpop1(true)
                console.log("bye");

            }
            if(response.data==="INVALID AMOUNT"){
              setpopuphead("INVALID CREDENTIALS")
              setinvalid("INVALID AMOUNT")
              setpop1(true)
              console.log("bye");

          }
            if(response.data==="FUNDS INSUFFICIENT"){
              setpopuphead("INVALID CREDENTIALS")

              setinvalid("FUNDS INSUFFICIENT")
              setpop1(true)
              console.log("bye");

          }
            if(response.data==="SUCCESS"){
              setpopuphead("SUCCESSFULL")
              setinvalid("AMOUNT TRANSFERED")
              setpop1(true)
                console.log("wqe")
                // window.location="/transaction/"+cusid1;

            }
          })
          
    }
    
    const handleSubmit=(e)=>{
        console.log("hi")
        console.log(accountno)
        console.log(amount)
        console.log(b)
        // const blog = { row.custid };
        e.preventDefault();
        const a={accountno,amount,b};
        console.log(a)
        
        handleSubmit1(accountno,amount,b)
        

    }
    
    const handleChange = (event) => {
      setaccountno(event.target.value);
    };
  
    return ( 
        <div>
            { pop1 && <Popup g={c} q={history} m={l}/>}
      <div className={classes.b} >
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap' />

        <Typography variant="h3" style={{fontFamily:'Zilla Slab'}}>Transaction</Typography>
        
            <form >
            <div style={{marginBottom:'2%'}}>
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" >Account no</InputLabel>
        {id && <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accountno}
          onChange={handleChange}
        >
          <MenuItem value={id[0].acnumber}>{id[0].acnumber}</MenuItem>
          <MenuItem value={id[1].acnumber}>{id[1].acnumber}</MenuItem>
          <MenuItem value={id[2].acnumber}>{id[2].acnumber}</MenuItem>
          <MenuItem value={id[3].acnumber}>{id[3].acnumber}</MenuItem>
          <MenuItem value={id[4].acnumber}>{id[4].acnumber}</MenuItem>
          <MenuItem value={id[5].acnumber}>{id[5].acnumber}</MenuItem>
          <MenuItem value={id[6].acnumber}>{id[6].acnumber}</MenuItem>
          <MenuItem value={id[7].acnumber}>{id[7].acnumber}</MenuItem>
          <MenuItem value={id[8].acnumber}>{id[8].acnumber}</MenuItem>

        </Select>}
      </FormControl>
            <input type="text" onChange={(e) => setamount(e.target.value)} className={classes.txt} placeholder="Enter Amount"></input>
            </div>
            <div>  
            <Button
        variant="contained"
        color="primary"
        
        className={classes.button}
        endIcon={<SendIcon/>}
        onClick={handleSubmit}>SEND
     
        
      
      </Button>
      </div>
      <div>
     
      </div> 
            </form>
       </div>
       </div>      
            
     );
}
 
export default Transaction;