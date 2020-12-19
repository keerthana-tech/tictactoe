import React,{ useState }  from 'react';

import Icon from './compenents/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Col,Row,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray= new Array(9).fill("empty")

const Game = ({playerOne, playerTwo, isCross, setIsCross, firstPlayer, setFirstPlayer,setActivePage}) => {

  
  const [winMessage,setWinMessage]=useState("")

  const reloadGame = () => {
    setIsCross(true)
    setWinMessage("")
    itemArray.fill("empty",0,9)
    setActivePage(0)
    setFirstPlayer(true)




  };

  const checkIsWinner =() =>{
    if(itemArray[0]!=="empty" &&
      itemArray[0]===itemArray[1] &&
      itemArray[0]===itemArray[2]){
        (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
        

        
      }
      else if (
        itemArray[3]!=="empty" &&
        itemArray[3]===itemArray[4]&&
        itemArray[3]===itemArray[5]
      ){
          (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
        }
      else if(itemArray[6]!=="empty"&&
      itemArray[6]===itemArray[7]&&
      itemArray[6]===itemArray[8]){
          (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
        }
        else if(itemArray[0]!=="empty" &&
        itemArray[0]===itemArray[3]&&
        itemArray[0]===itemArray[6]){
            (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
        }
          else if(itemArray[1]!=="empty"&&
          itemArray[1]===itemArray[4]&&
          itemArray[1]===itemArray[7]
          ){
            (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
         }
         else if(
          itemArray[2]!=="empty"&&
          itemArray[2]===itemArray[5]&&
          itemArray[2]===itemArray[8]
         ){
            (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
          }
          else if(itemArray[0]!=="empty"&&
          itemArray[0]=== itemArray[4]&&
          itemArray[0]=== itemArray[8]){
              (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
            }
          else if (itemArray[2]!=="empty"&&
          itemArray[2]===itemArray[4]&&
          itemArray[2]===itemArray[6]){
              (firstPlayer===true) ? setWinMessage(`${playerOne} wins `):setWinMessage(`${playerTwo} wins `)
            }
          else if(itemArray[0]!=="empty"&& itemArray[1 ]!=="empty"&& itemArray[2]!=="empty" && itemArray[3]!=="empty" && 
          itemArray[4 ]!=="empty"&& itemArray[5]!=="empty" && itemArray[6]!=="empty" && itemArray[8]!=="empty"&&itemArray[7]  !=="empty"){
              setWinMessage("game tie")
            }
        

      



    


  };

  const changeItem = itemNumber =>{
    if(winMessage){
      return toast (winMessage,{type:"success"})
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross?"cross" :"circle"
      setIsCross(!isCross)
      setFirstPlayer(!firstPlayer);

    }
    else{
      return toast("already filled", {type:"error"})
    }
    checkIsWinner();
  

  };
  return (
    <div className="main">
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
         {(firstPlayer===false) ?playerTwo:playerOne}'s turn
         
         
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

export default Game;
