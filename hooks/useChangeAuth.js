import { useState, useEffect } from "react";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

export const useChangeAuth = () => {
  const Auth = getAuth()
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeAuthListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribeAuthListener;
  }, []);

  return { user };
};
