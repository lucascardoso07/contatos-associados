import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import {
  IContact,
  IContactCreateFormData,
  IContactProvidersProps,
} from "../interfaces/Contacts.interfaces";
import { IUser } from "../interfaces/Users.interfaces";

export const ContactContext = createContext({} as IContactProvidersProps);

interface IChildrenProps {
  children: React.ReactNode;
}
export interface IUserForUserState {
  id: string;
  name: string;
  email: string;
  telefone: string;
}

export const ContactProviders = ({ children }: IChildrenProps) => {
  const token = localStorage.getItem("@token");
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [user, setUser] = useState<IUserForUserState>();

  const createContact = async (formData: IContactCreateFormData) => {
    try {
      const response = await api.post("/contact", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setContacts([...contacts, data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@userId");
    const listAllContacts = async () => {
      try {
        const response = await api.get<IUser>(`user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData: IUserForUserState = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          telefone: response.data.telefone,
        };
        setUser(userData);
        setContacts(response.data.contacts);
      } catch (error) {
        console.log(error);
      }
    };

    listAllContacts();
  }, []);

  const ContactUptade = async (
    formData: Partial<IContactCreateFormData>,
    contactId: string
  ) => {
    const token = window.localStorage.getItem("@token");
    try {
      await api.patch(`/contact/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const NewsContacts = contacts.map((contact) => {
        if (contactId === contact.id) {
          return { ...contact, ...formData };
        } else {
          return contact;
        }
      });
      setContacts(NewsContacts);
    } catch (error) {
      console.log(error);
    }
  };

  const contactDelete = async (contactId: string) => {
    const token = window.localStorage.getItem("@token");

    try {
      await api.delete(`/contact/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newContats = contacts.filter((contact) => contact.id !== contactId);
      setContacts(newContats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        createContact,
        contacts,
        ContactUptade,
        contactDelete,
        user,
        setUser,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
