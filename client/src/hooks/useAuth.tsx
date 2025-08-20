import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
   isAuthenticated: boolean;
   setAuthenticated: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
   const [isAuthenticated, setAuthenticated] = useState(() => !!localStorage.getItem("token"));

   useEffect(() => {
      setAuthenticated(!!localStorage.getItem("token"));
   }, []);

   return (
      <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
         {children}
      </AuthContext.Provider>
   );
}

export function useAuth() {
   const context = useContext(AuthContext);
   if (!context) throw new Error("useAuth must be used within AuthProvider");
   return context;
}
