import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chatpage from './pages/Chatpage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chatpage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
