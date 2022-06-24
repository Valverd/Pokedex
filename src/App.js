import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Pokemon from './components/Pokemon/Pokemon';

function App() {

  return (

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Routes>

    </BrowserRouter>
  
  );
};

export default App;
