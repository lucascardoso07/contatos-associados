import { useContext } from "react";
import { IContactCreateFormData } from "../../../interfaces/Contacts.interfaces";
import { StyledCreateContactForm } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactContext } from "../../../providers/ContactsContext";

export const CreateContactForm = ({ handdleModalCreate }: any) => {
  const { register, handleSubmit } = useForm<IContactCreateFormData>();
  const { createContact } = useContext(ContactContext);

  const submit: SubmitHandler<IContactCreateFormData> = (
    formData: IContactCreateFormData
  ) => {
    createContact(formData);
    handdleModalCreate(false);
  };

  return (
    <StyledCreateContactForm onSubmit={handleSubmit(submit)}>
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
        Adicionar
      </button>
    </StyledCreateContactForm>
  );
};
