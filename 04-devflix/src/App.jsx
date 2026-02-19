import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logotipo do serviço de streaming DevFlix, com letras vermelhas e fundo preto,
promovendo conteúdo de séries, filmes e entreterimento online"
      />

      <div classname="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      <Rodape link={"https://github.com/maria-luiza-fonte"}>MariaLuiza</Rodape>
    </div>
  );
};

export default App;
