import React,{ useState }  from 'react';
import logo from './logo.svg';

import Icon from './compenents/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Col,Row,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray= new Array(9).fill("empty")

const App = () => {

  const[isCross,setIscross] = useState(false)
  const [winMessage,setWinMessage]=useState("")

  const reloadGame = () => {
    setIscross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)


  };

  const checkIsWinner =() =>{
    if(itemArray[0]!=="empty" &&
      itemArray[0]===itemArray[1] &&
      itemArray[0]===itemArray[2]){
        setWinMessage(`${itemArray[0]} wins `)
      }
      else if (itemArray[3]===itemArray[4] &&
        itemArray[3]===itemArray[5]&&
        itemArray[3]!=="empty"){
          setWinMessage(`${itemArray[3]} wins ` )
        }
      else if(itemArray[6]===itemArray[7] &&
        itemArray[6]===itemArray[8]&&
        itemArray[6]!=="empty"){
          setWinMessage(`${itemArray[6]} wins ` )
        }
        else if(itemArray[0]===itemArray[3] &&
          itemArray[0]===itemArray[6]&&
          itemArray[0]!=="empty"){
            setWinMessage(`${itemArray[0]} wins ` )
        }
          else if(itemArray[1]===itemArray[4] &&
            itemArray[1]===itemArray[7]&&
            itemArray[1]!=="empty"
          ){
            setWinMessage(`${itemArray[1]} wins ` )
         }
         else if(itemArray[2]===itemArray[5] &&
          itemArray[2]===itemArray[8]&&
          itemArray[2]!=="empty"){
            setWinMessage(`${itemArray[2]} wins ` )
          }
          else if(itemArray[0]===itemArray[4] &&
            itemArray[0]===itemArray[8]&&
            itemArray[0]!=="empty"){
              setWinMessage(`${itemArray[0]} wins ` )
            }
          else if (itemArray[2]===itemArray[4] &&
            itemArray[2]===itemArray[6]&&
            itemArray[2]!=="empty"){
              setWinMessage(`${itemArray[2]} wins ` )
            }
          else if(itemArray[0] && itemArray[1]&& itemArray[2] && itemArray[3] &&
            itemArray[4] && itemArray[5] &&  itemArray[6] && itemArray[7] && itemArray[8] !=="empty"){
              setWinMessage("game tie")
            }
        

      



    


  };

  const changeItem = itemNumber =>{
    if(winMessage){
      return toast (winMessage,{type:"success"})
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross?"cross" :"circle"
      setIscross(!isCross)

    }
    else{
      return toast("already filled", {type:"error"})
    }
    checkIsWinner();
  

  };
  return (
    <div>
    <Container className="pd-50" />
      <ToastContainer position="bottom-center"/>
      <Row>
      <Col md={6} className="offset-md-3">
      {winMessage?(
        <div className="mb-2 mt-2">
         <h1 className="text-success text-uppercase text-center">
         {winMessage}

        
         </h1>
         <Button color="success" block onClick={reloadGame}>RELOAD THE GAME</Button>
         


        </div>
      ):(
        <h1 className="text-center text-warning">
        {isCross?"Cross":"Circle"} TURNS
        
        
        </h1>
      )}
        <div className="grid">
        {itemArray.map((item,index) => {
          return(
          <Card color="warning" onClick={ () => changeItem(index)} >
          <CardBody className="box">
           <Icon name={item} />
          
          </CardBody>
          
          
          </Card>



          )
          })}
        
        
        </div>
      
      </Col>
      
      </Row>
    </div>
  );
}

export default App;
