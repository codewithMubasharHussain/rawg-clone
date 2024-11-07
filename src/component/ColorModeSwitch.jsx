import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode(); // Correct destructuring
    return (
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>
                Dark Mode
            </Text>
        </HStack>
    );
}

export default ColorModeSwitch;
