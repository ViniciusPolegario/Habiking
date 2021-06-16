import {
  DivContainer,
  DivButtons,
  DivDescription,
  DivBackground,
  LogoContainer,
} from "./styles";
import ButtonComp from "../../components/ButtonComp";

import { Link } from "react-router-dom";

import Logo from "../../assets/imgs/logo.png";

const HomePage = () => (
  <DivBackground>
    <DivContainer>
      <DivDescription>
        <LogoContainer>
          <img src={Logo} alt="siteLogo" />
          <h3>Habiking</h3>
        </LogoContainer>
        <h4>
          Gestor de hábitos é uma aplicação onde você pode gerir seu lifestyle,
          tanto sozinho quanto em grupos que você pode entrar ou criar novos.
        </h4>
      </DivDescription>
      <DivButtons>
        <div>
          <p>Não tem uma conta ainda?</p>
          <Link to="/register">
            <ButtonComp>Cadastre-se</ButtonComp>
          </Link>
        </div>
        <div>
          <p>Já possui uma conta?</p>
          <Link to="/login">
            <ButtonComp>Login</ButtonComp>
          </Link>
        </div>
      </DivButtons>
    </DivContainer>
  </DivBackground>
);
export default HomePage;
