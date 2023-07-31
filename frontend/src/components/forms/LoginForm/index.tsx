import { useContext } from "react";
import { ILoginFormData } from "../../../interfaces/Users.interfaces";
import { StyledLoginForm } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginFormData>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormData> = (formData: ILoginFormData) => {
    userLogin(formData);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div className="input-container">
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div className="input-buttons">
        <button className="primary-button" type="submit">
          Entrar
        </button>
        <button className="secoundary-button">Cadastrar</button>
      </div>
    </StyledLoginForm>
  );
};
