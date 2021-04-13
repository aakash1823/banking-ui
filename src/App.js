import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './Customers';
import Customer from './Customer';

import NavBar from './NavBar';

import ViewTran from './ViewTran';
import History from './History';
import { useState } from "react";
import Heading from './Heading';

function App() {
  // const [heading,setheading]=useState("ALL CUSTOMERS")
  const [a,seta]=useState("alltrans")
  const [b,setb]=useState("newesttrans")
  const [c,setc]=useState("success")
  const [d,setd]=useState("failure")
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
          <Homepage/>

          </Route>
          <Route path='/customers'>
            <NavBar/>
            <Heading a="ALL CUSTOMERS"/>
          <Customers/>

          </Route>
          
          <Route path='/transaction/:id'>
            <NavBar/>
            <Heading a="CUSTOMER DETAILS"/>
            <Customer/>
           
          </Route>
          <Route path='/history/:id'>
            <NavBar/>
            <History/>
            
          </Route>
          <Route path='/alltransaction'>
            <NavBar/>
            <Heading a="ALL TRANSACTION"/>
            <ViewTran a={a}/>
            
          </Route>
          <Route path='/newestfirst'>
            <NavBar/>
            <Heading a="ALL TRANSACTION"/>
            <ViewTran a={b}/>
            
          </Route>
          <Route path='/success'>
            <NavBar/>
            <Heading a="SUCCESS TRANSACTION"/>
            <ViewTran a={c}/>
            
          </Route>
          <Route path='/failure'>
            <NavBar/>
            <Heading a="FAILED TRANSACTION"/>
            <ViewTran a={d}/>
            
          </Route>
        </Switch>
      </div>
    </Router>
    

  );
}

export default App;
