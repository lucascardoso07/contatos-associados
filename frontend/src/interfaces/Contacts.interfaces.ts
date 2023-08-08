import { IUserForUserState } from "../providers/ContactsContext";

export interface IContactCreateFormData {
  email: string;
  password: string;
  name: string;
  telefone: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: string;
  userId: string;
}

export interface IContactProvidersProps {
  createContact: (formData: IContactCreateFormData) => Promise<void>;
  contacts: IContact[];
  ContactUptade: (
    formData: Partial<IContactCreateFormData>,
    contactId: string
  ) => Promise<void>;
  contactDelete: (contactId: string) => Promise<void>;
  user: IUserForUserState | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUserForUserState | undefined>>;
}
