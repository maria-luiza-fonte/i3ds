
import { Route, Routes } from 'react-router';
import './App.css'

import Sobre from "./pages/Sobre"
import Home from './pages/Home';
import Header from './componentes/header/Header';
import Contato from './pages/Contato';
import Footer from './componentes/header/footer/Footer';

function App() {

  return (
    <>
    <Header/>
      <Routes>
    <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
         <Route path="/contato" element={<Contato/>} />
     <Route path="/sobre" element={<Sobre/>} />
     <Route path=""/>
      </Routes>

      <Footer Link={"https://github.com/maria-luiza-fonte}"}
      escritoLink={"MariaLulu"}
      />
    </>
  );
}

export default App
