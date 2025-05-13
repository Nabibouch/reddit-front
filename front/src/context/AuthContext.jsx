import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    const storedUser = localStorage.getItem("user")
    if (jwt && storedUser) setUser(JSON.parse(storedUser))
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("jwt", token)
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
  };

  const logout = () => {
    localStorage.removeItem("jwt")
    localStorage.removeItem("user")
    setUser(null)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)
}






// import { createContext, useContext, useState } from "react"

// const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null)

//     const login = (userData) => setUser(userData)
//     const logout = () => setUser(null)

//     return (
//         <AuthContext.Provider value={{ user, login, logout }} >
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => useContext(AuthContext)