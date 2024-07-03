import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        try {
          const response = await axios.get('http://localhost:3000/api/user/current-user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching current user:', error);
        }
      }
    };

    fetchUser();
  }, []);


//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
