import { ContentIntro } from "../../components/content_intro/content_intro";
import { Header } from "../../components/header/header";
import { StyledHomePage } from "./styles";
import figurecontacts from "../../assets/figurecontacts.svg";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <div className="container-home ">
        <ContentIntro />
        <div className="rigth-content">
          <p>A Melhor Plataforma para gerenciar ses contatos.</p>
          <img src={figurecontacts} alt="" />
        </div>
      </div>
    </StyledHomePage>
  );
};
