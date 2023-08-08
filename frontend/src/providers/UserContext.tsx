import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import {
  ILoginFormData,
  ILoginResponse,
  IRegisterFormData,
  IUser,
  IUserContext,
} from "../interfaces/Users.interfaces";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserProviders = ({ children }: IUserProviderProps) => {
  const [userIsLogin, setuserIsLogin] = useState(false);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  const navigate = useNavigate();
  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await api.post<ILoginResponse>("/login", formData);
      localStorage.setItem("@token", response.data.token);
      localStorage.setItem("@userId", response.data.userId);
      navigate("/dashboard");
      setuserIsLogin(true);
      setUserId(response.data.userId);
    } catch (err) {
      console.log(err);
    }
  };

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      await api.post("/user", formData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@userId");
    localStorage.removeItem("@user");
    setuserIsLogin(false);
    navigate("/");
  };

  const userUptade = async (formData: Partial<IUser>, userId: string) => {
    const token = window.localStorage.getItem("@token");
    try {
      await api.patch(`/user/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const userDelete = async (userId: string) => {
    const token = window.localStorage.getItem("@token");

    try {
      await api.delete(`/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      userLogout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
        userIsLogin,
        userId,
        userUptade,
        userDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
