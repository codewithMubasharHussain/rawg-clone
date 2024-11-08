import * as React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import theme from '../src/theme.js'
import App from './App';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)