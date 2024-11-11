
import {Text,SimpleGrid} from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";


function GameGrid(){
    const {Game,error}=useGames();
    return(
        <>
        {error&&<Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} padding={"10px"} spacing={10}>
            {Game.map(game=> <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;