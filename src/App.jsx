
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';   
import Atividade01 from './pages/atividades/atv-01';
import Atividade02 from './pages/atividades/atv-02';
import Atividade03   from './pages/atividades/atv-03';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Exemplo/1" element={<Exemplo01 />} />
      <Route path="/Exemplo/2" element={<Exemplo02 />} />
      <Route path="/Atividade/1" element={<Atividade01 />} />
      <Route path="/Atividade/2" element={<Atividade02 />} />
      <Route path="/Atividade/3" element={<Atividade03 />} />
    </Routes>
  )
}

export default App;
