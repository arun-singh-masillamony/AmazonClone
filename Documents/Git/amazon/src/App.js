import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Login from './Login.js'
import CheckingPage from './CheckingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {React ,useEffect} from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';


function App() {
const [,dispatch]= useStateValue();
useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    if(authUser){
      console.log('useris logged',authUser)
      dispatch({
        type:"SET_USER",
        user: authUser
      })
    }
    else{
      dispatch({
        type:"SET_USER",
        user: null
      })
    }
  })
},[] )
return (
  <Router >
    <Switch >
      <div className="App">
        <Route path='/' exact>
          <Header />
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checking'>
          <Header />
          <CheckingPage />
        </Route>
      </div>
      </Switch>
  </Router>
  );
}

export default App;
