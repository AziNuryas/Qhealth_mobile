import React, {createContext, useState, useContext, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000/api';

interface Auth {
  user: any;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, pass: string) => {
    const {data} = await axios.post(`${API_URL}/login`, {email, password: pass});
    await SecureStore.setItemAsync('token', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    setUser(data.user);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      const t = await SecureStore.getItemAsync('token');
      if (t) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${t}`;
        const {data} = await axios.get(`${API_URL}/user`);
        setUser(data);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};