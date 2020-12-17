import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'reactstrap';
import './App.css';
 

const Toss = ({setActivePage, playerOne, playerTwo, setIsCross, setFirstPlayer}) => {

 
  const [tossWinner,setTossWinner]= useState(0);

  var WinnerName;

  const toss =() =>{
    const landedOn = Math.floor(Math.random()* 2);
    if (landedOn===1){
     setTossWinner(1)
    }
    else{
      setTossWinner(2)
    }
  }

  if (tossWinner === 1){
    setFirstPlayer(true)
    WinnerName = playerOne;
  }
  else{
    WinnerName = playerTwo;
    setFirstPlayer(false);
    }

  
  const crossSelector =()=>{
    setActivePage(2)
    setIsCross(true)
    
  }
  const circleSelector = () =>{
     setIsCross(false);
     setActivePage(2)
  }

  if (tossWinner===0){
   return(
    <div className="button">
    <Button color="info" onClick= {toss}>TOSS</Button>
    </div>
   );
  }
  else{
    return(
      <div className="win" >
     <div className="text-info" >{WinnerName} won the Toss</div>
     <div className="text-info">Choose Symbol</div>
     <Button outline color="warning" onClick={crossSelector}>X </Button>
     <Button  outline color="warning" onClick={circleSelector}> O</Button>
     </div>
      
      
      
     
   );
  }
} 
export default Toss;
