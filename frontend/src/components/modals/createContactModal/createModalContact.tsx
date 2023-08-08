import { CreateContactForm } from "../../forms/CreateContactForm";
import { StyledModalCrete } from "./style";

interface IProps {
  handdleModalCreate: () => void;
}

export const CreateModalContact = ({ handdleModalCreate }: IProps) => {
  return (
    <StyledModalCrete>
      <div className="modal-card">
        <div className="header--modal">
          <p>adicionar Contato</p>
          <button onClick={() => handdleModalCreate()}>x</button>
        </div>
        <CreateContactForm handdleModalCreate={handdleModalCreate} />
      </div>
    </StyledModalCrete>
  );
};
