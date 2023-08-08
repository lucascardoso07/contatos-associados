import { useContext, useState } from "react";
import { StyledHeader } from "./style";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactsContext";

import { CreateModalUser } from "../modals/createUserModal/createModalUser";

export const Header = () => {
  const { userLogout } = useContext(UserContext);
  const { user } = useContext(ContactContext);
  const token = localStorage.getItem("@token");
  const [showModal, setShowModal] = useState(false);

  const handdleModalUpdateUser = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <StyledHeader>
      <div className="container">
        <h2>Contact.Zera</h2>
        {!token ? (
          <Link id="button-login" to="/login">
            Login
          </Link>
        ) : (
          <div className="flex-he">
            <div className="container-image-profile">
              <p>
                Ola,{" "}
                <button onClick={() => handdleModalUpdateUser()}>
                  {user?.name}
                </button>
              </p>
              <i onClick={() => userLogout()}>
                <FaSignInAlt />
              </i>{" "}
            </div>
          </div>
        )}
      </div>
      {showModal ? (
        <CreateModalUser
          handdleModalUpdateUser={handdleModalUpdateUser}
          user={user}
        />
      ) : (
        <></>
      )}
    </StyledHeader>
  );
};
