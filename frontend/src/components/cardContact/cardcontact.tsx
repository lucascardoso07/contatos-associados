import { FaEdit } from "react-icons/fa";
import { StyledCardContact } from "./style";
import { IContact } from "../../interfaces/Contacts.interfaces";

interface IContactProps {
  contact: IContact;
  index: number;
  setEditinContact: React.Dispatch<React.SetStateAction<IContact | null>>;
  handdleModalUpdate: () => void;
}

export const CardContact = ({
  contact,
  index,
  setEditinContact,
  handdleModalUpdate,
}: IContactProps) => {
  return (
    <StyledCardContact>
      <h3>{`${index + 1}`}</h3>
      <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.telefone}</p>
      </div>
      <button
        onClick={() => {
          setEditinContact(contact), handdleModalUpdate();
        }}
      >
        <i>
          <FaEdit />
        </i>
      </button>
    </StyledCardContact>
  );
};
