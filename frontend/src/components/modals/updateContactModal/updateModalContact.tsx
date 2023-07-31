import { IContact } from "../../../interfaces/Contacts.interfaces";
import { UpdateContactForm } from "../../forms/UpdateContactForm";
import { StyledModalUpdate } from "./style";

interface IProps {
  editContact: IContact | null;
  handdleModalUpdate: () => void;
}

export const UpdateModalContact = ({
  editContact,
  handdleModalUpdate,
}: IProps) => {
  return (
    <StyledModalUpdate>
      <div className="modal-card">
        <div className="header--modal">
          <p>Atualizar Contato</p>
          <button onClick={() => handdleModalUpdate()}>x</button>
        </div>
        <UpdateContactForm
          handdleModalUpdate={handdleModalUpdate}
          editContact={editContact}
        />
      </div>
    </StyledModalUpdate>
  );
};
