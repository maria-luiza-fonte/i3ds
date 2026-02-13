import "./App.css";
import Link from "./componts/link/Link";
import Perfil from "./componts/Perfil/Perfil";
import Rodape from "./componts/Rodape/Rodape";
import SocialLink from "./componts/SocialLink/SocialLink";

function App() {
  return (
    <>
      <div id="App">
        <Perfil fotoPerfil={"https://placehold.co/100"}>Maria Luiza</Perfil>

        <div className="switch"> botão switch</div>

        <ul>
          <Link url={""}>Inscreva-se</Link>
          <Link url={""}>Minha playlist</Link>
          <Link url={""}>Me pague um docinho</Link>
          <Link url={""}>Conheça o Curso Dev</Link>
        </ul>

        <div id="social-Links">
          <SocialLink url={"https://github.com/"} icon={"logo-github"} />
          <SocialLink
            url={"https://www.instagram.com/"}
            icon={"logo-instagram"}
          />
          <SocialLink
            url={"https://www.linkedin.com.br/"}
            icon={"logo-linkedin"}
          />
          <SocialLink url={"https://www.youtube.com/"} icon={"logo-youtube"} />
        </div>

        <div className="rodape"></div>

        <Rodape>Maria Lulu</Rodape>
      </div>
    </>
  );
}

export default App;
