import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Blogs from './Blogs';
import Experiences from './Experiences';
import Home from './Home.jsx';
import NavBar from './NavBar';
import Projects from './Projects';


const App=()=>{
  return(
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/Experiences' component={Experiences}/>
      <Route exact path='/blogs' component={Blogs}/>
    </Switch>
    </>
  )
}

export default App;
