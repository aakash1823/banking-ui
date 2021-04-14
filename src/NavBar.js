import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import ReceiptIcon from '@material-ui/icons/Receipt';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButton1: {
    marginLeft: "72%",
  },
 
  nav:{
      backgroundColor:'#696868',
  },
  lg:{
    color:"white",
  }
}));
const NavBar = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/" style={{color:"white"}}><AccountBalanceIcon /></Link>
          </IconButton>
          <Typography variant="h6" color="inherit" style={{width:"270px"}}>
            Spark Banking System
          </Typography>
          <Tooltip title="Customers">
          <IconButton className={classes.menuButton1} color="inherit" aria-label="menu">
            <Link to="/customers" className={classes.lg}><PeopleAltIcon /></Link>
            
          </IconButton>
          </Tooltip>
          {/* <IconButton  color="inherit" aria-label="menu">
            <Link to="/transaction" className={classes.lg}><AccountBalanceWalletIcon/></Link>
            
          </IconButton> */}
          <Tooltip title="All transactions">
          <IconButton  color="inherit" aria-label="menu">
            <Link to="/alltransaction" className={classes.lg}><ReceiptIcon /></Link>
            
          </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
     );
}
 
export default NavBar;