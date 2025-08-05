import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chatpage from './pages/Chatpage';
import { ChakraProvider } from '@chakra-ui/react';
import ChatProvider from './Context/ChatProvider';

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat' element={<Chatpage/>} />
          </Routes>
        </ChakraProvider>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;
