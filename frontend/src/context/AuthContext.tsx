import React from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";

type User = {
  name: string;
  email: string;
};

type AuthContextData = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const cookies = parseCookies();
    const userData = cookies.user ? JSON.parse(cookies.user) : null;
    setUser(userData);
  }, []);

  async function signIn(email: string, password: string) {
    // perform authentication logic here
    // if authentication is successful, set the user state and save the user in cookies
    setUser({ name: "John Doe", email });
    setCookie({}, "user", JSON.stringify({ name: "John Doe", email }), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }

  function signOut() {
    // remove the user state and user cookie
    setUser(null);
    destroyCookie({}, "user");
    router.push("/sign-in");
  }

  React.useEffect(() => {
    const handleRouteChange = () => {
      const cookies = parseCookies();
      const user = cookies.user ? JSON.parse(cookies.user) : null;
      setUser(user);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
