import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const theme = extendTheme({ config })


ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  , document.getElementById('root')
);


