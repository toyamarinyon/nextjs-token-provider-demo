import React, { useContext, useEffect, useState } from "react";
import { generateUUID } from "../lib/util/generateUUID";

export const AuthContext = React.createContext({
  idToken: "default token",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false);
  const [authContext, setAuthContext] = useState({
    idToken: "undefined",
  });

  /**
   * firebaseのidTokenを1分ごとに更新
   * TODO: 残り時間確認して必要であれば更新する
   */
  useEffect(() => {
    const timerId = setInterval(() => {
      setAuthContext({
        ...authContext,
        idToken: generateUUID(),
      });
    }, 1000 * 5);
    return () => {
      clearInterval(timerId);
    };
  }, [authContext]);
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
