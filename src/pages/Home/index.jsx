import {
  DivContainer,
  DivButtons,
  DivDescription,
  DivBackground,
} from "./styles";
import { Link } from "react-router-dom";

const HomePage = () => (
  <DivBackground>
    <DivContainer>
      <DivDescription>
        <h3>Gestor de Hábitos</h3>
        <h4>
          Gestor de hábitos é uma aplicação onde você pode gerir seu lifestyle,
          tanto sozinho quanto em grupos que você pode entrar ou criar novos.
        </h4>
      </DivDescription>
      <DivButtons>
        <Link to="/register">
          <p>Não tem uma conta ainda?</p>
          <button>Cadastre-se</button>
        </Link>
        <div>
          <p>Já possui uma conta?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </DivButtons>
    </DivContainer>
  </DivBackground>
);
export default HomePage;
