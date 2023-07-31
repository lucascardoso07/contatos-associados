import { IContact } from "./Contacts.interfaces";

export interface IRegisterFormData {
  email: string;
  password: string;
  name: string;
  telefone: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: string;
  contacts: IContact[];
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IUserContext {
  userLogin: (formData: ILoginFormData) => Promise<void>;
  userRegister: (formData: IRegisterFormData) => Promise<void>;
  userLogout: () => void;
  userIsLogin: boolean;
  userId: string;
}

export interface ILoginResponse {
  token: string;
  userId: string;
}
