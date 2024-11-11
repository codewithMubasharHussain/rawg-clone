import { Card, CardBody, Heading, HStack, Image ,Text} from "@chakra-ui/react";
import PlatFormIconsList from "./PlatFormIconsList";
import CriticScore from "./CriticScore";

function GameCard({game}){
    return(
        <>
        <Card width={"300px"} borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                    <HStack justifyContent={"space-between"}>
                    <PlatFormIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                    </HStack>
            </CardBody>
        </Card>
        </>
    )
}

export default GameCard;
