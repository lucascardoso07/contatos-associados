import { useContext, useState } from "react";
import { CardContact } from "../../components/cardContact/cardcontact";
import { Header } from "../../components/header/header";
import { CreateModalContact } from "../../components/modals/createContactModal/createModalContact";
import { StyledDashBoardPage } from "./styles";
import { ContactContext } from "../../providers/ContactsContext";
import { UpdateModalContact } from "../../components/modals/updateContactModal/updateModalContact";
import { IContact } from "../../interfaces/Contacts.interfaces";

export const DashBoardPage = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [editContact, setEditinContact] = useState<IContact | null>(null);

  const handdleModalCreate = () => {
    if (showModalCreate) {
      setShowModalCreate(false);
    } else {
      setShowModalCreate(true);
    }
  };

  const handdleModalUpdate = () => {
    if (showModalUpdate) {
      setShowModalUpdate(false);
    } else {
      setShowModalUpdate(true);
    }
  };

  const { contacts } = useContext(ContactContext);

  return (
    <StyledDashBoardPage>
      <Header />
      <div className="container-dashboard">
        <div className="dashboard-left-content">
          <h2>
            My <span>contacts</span>
          </h2>
          <p>A Melhor Plataforma para gerenciar ses contatos </p>
          <div className="dashboard-button-container">
            <button onClick={() => handdleModalCreate()}>+</button>
            <p>Adicionar novo contato</p>
          </div>
        </div>
        <div className="dashboard-rigth-content">
          <ul>
            {contacts.map((contact, index) => (
              <CardContact
                key={contact.id}
                contact={contact}
                index={index}
                setEditinContact={setEditinContact}
                handdleModalUpdate={handdleModalUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
      {showModalCreate ? (
        <CreateModalContact handdleModalCreate={handdleModalCreate} />
      ) : (
        <></>
      )}
      {showModalUpdate ? (
        <UpdateModalContact
          editContact={editContact}
          handdleModalUpdate={handdleModalUpdate}
        />
      ) : (
        <></>
      )}
    </StyledDashBoardPage>
  );
};
