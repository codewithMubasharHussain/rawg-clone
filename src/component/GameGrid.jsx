import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/api-client";
import {Text} from "@chakra-ui/react";


function GameGrid(){
   const [Game,SetGame] =  useState([]);
   const [error,seterror] = useState('');

   useEffect(()=>{
    apiClient.get('/games')
    .then(res => SetGame(res.data.results))
    .catch(error => seterror(error.message))
   })
    return(
        <>
        {error&&<Text>{error}</Text>}
        <ul>{Game.map(game=> <li key={game.id}>{game.name}</li>)}</ul>
        </>
    )
}

export default GameGrid;