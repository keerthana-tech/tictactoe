import React, { useEffect,useState } from 'react';
import Input from "./Input";
import Game from "./Game";
 

const Toss = () => {

  const [side,setSide]= useState(0);
  const [isCross,setIsCross]=useState(false);

  const To =() =>{
   useEffect(() => {
    const landedOn = Math.round(Math.random()* 1 + 0);
    setSide(landedOn);
    if (landedOn===1){
     setIsCross('true')
    }
    else{
      setIsCross('false')
    }
    
  }, []);
}
  return(
    <div>
    <button onClick={<Game/>}>toss</button>
  
    </div>
  )
} 
export default Toss;
