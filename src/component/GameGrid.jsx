
import {Text} from "@chakra-ui/react";
import useGames from "../Hooks/useGames";


function GameGrid(){
    const {Game,error}=useGames();
    return(
        <>
        {error&&<Text>{error}</Text>}
        <ul>{Game.map(game=> <li key={game.id}>{game.name}</li>)}</ul>
        </>
    )
}

export default GameGrid;