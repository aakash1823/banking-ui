import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ReactFontLoader from 'react-font-loader';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image:{
        height:'100vh',
        backgroundImage: 'url(bground.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    },
 
    heading:{
        backgroundColor:'grey',
    },
    a:{
    marginTop:'8%',
    border: "3px solid black",
    borderRadius:"10px"
    },
    txt:{
        textDecoration:'none',
        color:'black',
    }
  }));

  
  
const Homepage = () => {
    const classes = useStyles();

    return (  

        <div className={classes.root}className={classes.image}>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap' />
      <Grid  container component="main" >
        <Grid item xs={6} >
        </Grid>
        <Grid item xs={6} >
        <div>
        <Typography variant="h1" component="h2" style={{fontFamily:'Zilla Slab',fontSize:"110px"}}>BANKING SYSYTEM</Typography>
        </div>
        <Button variant="outlined" size="large"color="black" className={classes.a}>
        <Link to="/customers" className={classes.txt}>Click here to proceed</Link>
        
        </Button>
        </Grid>
        
        </Grid>
        

    </div>
    );
}
 
export default Homepage;