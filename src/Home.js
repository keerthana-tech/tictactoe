import React,{ useState } from "react";
import Input from "./Input";
import Game from "./Game";
import Toss from "./Toss";

export default function App() {
  

  const [activePage, setActivePage] = useState(0);
  const [playerOne,setPlayerOne]= useState("");
  const [playerTwo,setPlayerTwo]= useState("");
  const [isCross,setIsCross]=useState(true);
  const [firstPlayer, setFirstPlayer] = useState(true);

  const pages_list = [<Input setActivePage={setActivePage} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} />,
                    <Toss setActivePage={setActivePage} playerOne={playerOne} playerTwo={playerTwo} setIsCross={setIsCross}  setFirstPlayer={setFirstPlayer}/>,
                    <Game playerOne={ playerOne } playerTwo={ playerTwo } firstPlayer={firstPlayer} setFirstPlayer={setFirstPlayer} isCross={isCross} setIsCross={setIsCross} setActivePage={setActivePage}/>];

  return (
    <div className="App">
      {pages_list[activePage]}
    </div>
  );
}
