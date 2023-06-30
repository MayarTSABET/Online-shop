import React from 'react';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import  Footer from './components/Footer';
function App() {
  return (
    <ChakraProvider>
      <div className='app'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
