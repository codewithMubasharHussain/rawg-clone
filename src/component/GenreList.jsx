import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";

function GenreList(){
    const {Genres,isloading} = useGenre();
    if(isloading) return <Spinner/>
    return(
        <>
        <List>
            {Genres.map(genre => <ListItem paddingY={"5px"} key={genre.id}><HStack>
                <Image boxSize={"32px"} borderRadius={8} src={genre.image_background}/>
                <Text fontSize={"lg"}>{genre.name}</Text>
                </HStack>
                </ListItem>)}
        </List>
        </>
    )
}

export default GenreList;