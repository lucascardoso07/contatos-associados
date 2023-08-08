import { useContext } from "react";
import { IContactCreateFormData } from "../../../interfaces/Contacts.interfaces";
import { StyledUpdateUserForm } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserForUserState } from "../../../providers/ContactsContext";
import { UserContext } from "../../../providers/UserContext";

interface IProps {
  user: IUserForUserState | undefined;
  handdleModalUpdateUser: () => void;
}

export const UpdateUserForm = ({ handdleModalUpdateUser, user }: IProps) => {
  const { userUptade } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IContactCreateFormData>({
    defaultValues: {
      email: user?.email,
      name: user?.name,
      telefone: user?.telefone,
    },
  });

  const submit: SubmitHandler<IContactCreateFormData> = (
    formData: IContactCreateFormData
  ) => {
    handdleModalUpdateUser();
    const userId = localStorage.getItem("@userId");
    userUptade(formData, userId!);
  };

  return (
    <StyledUpdateUserForm onSubmit={handleSubmit(submit)}>
      <div className="input--container">
        <div className="flex">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="flex">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
        </div>{" "}
        <div className="flex">
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" {...register("telefone")} />
        </div>
      </div>
      <button className="button-add" type="submit">
        Atualizar
      </button>
    </StyledUpdateUserForm>
  );
};
