import './App.css';
import Navigation from './NavBar';
import CardCom from './Cards'
import Heading from './Heading'
import React from 'react';
import FormContact from './Form'

const App = () =>{
  return (
    <React.Fragment>
      <div className='App'>
        <Navigation />
        <Heading />
        <CardCom  /> 
        <FormContact />
      </div>
    
    </React.Fragment>
  );
}

export default App;


