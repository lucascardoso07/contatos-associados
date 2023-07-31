import { RegisterForm } from "../../components/forms/RegisterForm";
import { ContentIntro } from "../../components/content_intro/content_intro";
import { Header } from "../../components/header/header";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Header />
      <div className="container-register ">
        <ContentIntro />
        <div className="rigth-content">
          <RegisterForm />
        </div>
      </div>
    </StyledRegisterPage>
  );
};
