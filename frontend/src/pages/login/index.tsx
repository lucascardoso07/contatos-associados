import { LoginForm } from "../../components/forms/LoginForm";
import { ContentIntro } from "../../components/content_intro/content_intro";
import { Header } from "../../components/header/header";
import { StyledLoginPage } from "./styles";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Header />
      <div className="container-login ">
        <ContentIntro />
        <div className="rigth-content">
          <LoginForm />
        </div>
      </div>
    </StyledLoginPage>
  );
};
