
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


function GameGrid(){
    const {Game,error,isloading}=useGames();
    const Skeleton = [1,2,4,5,6];
    return(
        <>
        {error&&<Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={"10px"} spacing={10}>
            {isloading&&Skeleton.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
            {Game.map(game=> <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;