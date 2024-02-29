import { SetStateAction, createContext, useState } from 'react';

export const AuthContext = createContext<{
  user: null | object;
  signin: Function;
  signout: Function;
}>({ user: null, signin: () => {}, signout: () => {} });

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(null);
  const signin = (newUser: object, cb: Function) => {
    setUser(newUser as SetStateAction<null>);
    cb();
  };
  const signout = (cb: Function) => {
    setUser(null);
    cb();
  };
  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
