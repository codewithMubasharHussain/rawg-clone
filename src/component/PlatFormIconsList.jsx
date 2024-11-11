import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';

function PlatFormIconsList({platforms}){
    const iconmap = {
        window: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        apple:FaApple,
        linux:FaLinux,
        android:FaAndroid,
        iphone:MdPhoneIphone,
        nintendo:SiNintendo,
        globe:BsGlobe
    }
    return(
        <HStack marginY={1}>
        {platforms.map((platform)=> (
            <Icon as={iconmap[platform.slug]} color={"gray.500"}></Icon>
        ))}

        </HStack>
    )
}

export default PlatFormIconsList;