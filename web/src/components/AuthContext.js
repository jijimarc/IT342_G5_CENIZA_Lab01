import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (role) => {
    if (role === 'guest') {
      setUser({ name: 'Guest User', role: 'guest', isGuest: true });
    } else {
      setUser({ name: 'John Doe', role: 'admin', isGuest: false });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);