"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  tenant?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      // Simulate session check
      const session = localStorage.getItem("user-session");
      if (session) {
        setUser(JSON.parse(session));
      }
    } catch (error) {
      console.error("Session check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate login API call
      console.log("Attempting login for:", email, "with password length:", password.length);
      const mockUser: User = {
        id: "1",
        name: "Admin User",
        email,
        role: "admin",
      };
      setUser(mockUser);
      localStorage.setItem("user-session", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user-session");
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}