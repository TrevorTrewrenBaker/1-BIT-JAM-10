import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Home from './components/Home';
import Margarete from './components/Margarete';
import John from './components/John';
import Bill from './components/Bill';
import TheChoice from './components/TheChoice'

function App() {

  const [magaretSolved, setMargaretSolved] = useState(null); 
  const [billSolved, setBillSolved] = useState(null); 
  const [johnSolved, setJohnSolved] = useState(null); 

 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/home" element={<Home margaretSolved={magaretSolved} billSolved={billSolved} johnSolved={johnSolved}/>}/>
      <Route path="/margaret" element={<Margarete setSolved={setMargaretSolved} solved={magaretSolved}/>}/>
      <Route path="/bill" element={<Bill setSolved={setBillSolved} solved={billSolved}/>}/> 
      <Route path="/john" element={<John setSolved={setJohnSolved} solved={johnSolved}/>}/>
      <Route path="/theChoice" element={<TheChoice/>}/>
    </Routes>
  </BrowserRouter>
 )
}

export default App;
