import { useContext } from "react";
import {
  IContact,
  IContactCreateFormData,
} from "../../../interfaces/Contacts.interfaces";
import { StyledUpdateContactForm } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactContext } from "../../../providers/ContactsContext";

interface IProps {
  editContact: IContact | null;
  handdleModalUpdate: () => void;
}
export const UpdateContactForm = ({
  editContact,
  handdleModalUpdate,
}: IProps) => {
  const { ContactUptade, contactDelete } = useContext(ContactContext);

  const { register, handleSubmit } = useForm<IContactCreateFormData>({
    defaultValues: {
      email: editContact?.email,
      name: editContact?.name,
      telefone: editContact?.telefone,
    },
  });

  const submit: SubmitHandler<IContactCreateFormData> = (
    formData: IContactCreateFormData
  ) => {
    handdleModalUpdate();
    ContactUptade(formData, editContact!.id);
  };

  return (
    <StyledUpdateContactForm onSubmit={handleSubmit(submit)}>
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
      <button
        className="button-remove "
        onClick={() => contactDelete(editContact!.id)}
      >
        Remover
      </button>
    </StyledUpdateContactForm>
  );
};
