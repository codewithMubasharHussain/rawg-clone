import { Card, CardBody, Heading, Image ,Text} from "@chakra-ui/react";
import PlatFormIconsList from "./PlatFormIconsList";

function GameCard({game}){
    return(
        <>
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <PlatFormIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
            </CardBody>
        </Card>
        </>
    )
}

export default GameCard;
