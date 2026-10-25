import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("quizforge_token");

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me")
      .then(({ data }) => setUser(data.user))
      .catch(() => {
        localStorage.removeItem("quizforge_token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  async function register(formData) {
    const { data } = await api.post("/auth/register", formData);

    localStorage.setItem("quizforge_token", data.token);
    setUser(data.user);

    return data;
  }

  async function login(credentials) {
    const { data } = await api.post("/auth/login", credentials);

    localStorage.setItem("quizforge_token", data.token);
    setUser(data.user);

    return data;
  }

  function logout() {
    localStorage.removeItem("quizforge_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
