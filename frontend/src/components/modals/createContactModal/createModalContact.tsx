import { CreateContactForm } from "../../forms/CreateContactForm";
import { StyledModalCrete } from "./style";

export const CreateModalContact = ({ handdleModalCreate }: any) => {
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
