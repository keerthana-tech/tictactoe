
import Input from "./Input";
import Game from "./Game";
import Toss from "./Toss";

export default function App() {
  

  const [activePage, setActivePage] = useState(0);
  const [isCross,setIsCross]=useState(false);
  const [playerone,setPlayerone]=useState("");
  const [playerTwo,setPlayerTwo]=useState("");

  const pages_list = [<Input setActivePage={setActivePage} setPlayerone={setPlayerone} setPlayerTwo={setPlayerTwo} />, <Game />];

  return (
    <div className="App">
      {pages_list[activePage]}
      <h1></h1>
    </div>
  );
}
