import { SubmitHandler, useForm } from "react-hook-form";
import { StyledRegisterform } from "./style";
import { IRegisterFormData } from "../../../interfaces/Users.interfaces";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<IRegisterFormData>();

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormData> = (
    formData: IRegisterFormData
  ) => {
    userRegister(formData);
  };

  return (
    <StyledRegisterform onSubmit={handleSubmit(submit)}>
      <h3>Cadastrar</h3>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div className="input-container">
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div className="input-container">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div className="input-container">
        <label htmlFor="Telefone">Telefone:</label>
        <input type="text" id="Telefone" {...register("telefone")} />
      </div>
      <div className="input-buttons">
        <button className="primary-button" type="submit">
          Cadastrar
        </button>
      </div>
    </StyledRegisterform>
  );
};
