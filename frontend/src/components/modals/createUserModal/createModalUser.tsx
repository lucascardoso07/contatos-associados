import { IUserForUserState } from "../../../providers/ContactsContext";

import { UpdateUserForm } from "../../forms/UpdateUserForm";
import { StyledModalCrete } from "./style";

interface IProps {
  user: IUserForUserState | undefined;
  handdleModalUpdateUser: () => void;
}

export const CreateModalUser = ({ handdleModalUpdateUser, user }: IProps) => {
  return (
    <StyledModalCrete>
      <div className="modal-card">
        <div className="header--modal">
          <p>Editar Usuario</p>
          <button onClick={() => handdleModalUpdateUser()}>x</button>
        </div>
        <UpdateUserForm
          handdleModalUpdateUser={handdleModalUpdateUser}
          user={user}
        />
      </div>
    </StyledModalCrete>
  );
};
