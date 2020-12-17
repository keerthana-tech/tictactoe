import React  from "react";
import './App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Inputt = ({setActivePage,setPlayerOne,setPlayerTwo}) => {
  
  const homePageDirector = () => {
    setActivePage(1);
    
  };
  
 
  
  

  return (
    <div className="bg">
      <Form className="form">
      <h1  className="text-info">TIC TAC TOE </h1>
      <FormGroup>
        <Label for="player1" className="text-info">Player1</Label>
        <Input id="player1"  onChange={(e)=>setPlayerOne(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="player2"  className="text-info">Player2</Label>
        <Input  id="player2" onChange={(e)=>setPlayerTwo(e.target.value)} />
      </FormGroup>
      <Button outline color="warning" onClick={homePageDirector} >Submit</Button>
      
      
      
      
      
      </Form>
      
      
    </div>
  );
};

export default Inputt;
