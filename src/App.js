import './App.css';
import Navigation from './NavBar';
import CardCom from './Cards'
import Heading from './Heading'
import React from 'react';


const App = () =>{
  return (
    <React.Fragment>
      <div className='App'>
        <Navigation />
        <Heading />
        <CardCom  /> 
      </div>
    
    </React.Fragment>
  );
}

export default App;


