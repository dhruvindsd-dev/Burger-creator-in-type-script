import { createContext } from "react";

export interface AuthContextInterface {
  isAuth: boolean;
  token?: string;
  username?: string;
  email?: string;
}

const AuthContext = createContext<AuthContextInterface>({
  isAuth: false,
});
export default AuthContext;
