import React, {useState } from "react";
import Game from "./Game";
import Toss from "./Toss";

const Input = ({setActivePage,setPlayerone,setPlayerTwo}) => {
  
  const homePageDirector = () => {
    setActivePage(1);
    
  };
  
 
  
  

  return (
    <div>
      <label for="player1">player1</label>
      <input id="player1" onChange={(e)=>setPlayerone(e.target.value)} />
      <label for="player2" >player2</label>
      <input id="player2" onChange={(e)=>setPlayerTwo(e.target.value)}>
      </input>
      <button onSubmit={homePageDirector} >Submit</button>
    </div>
  );
};

export default Input;
