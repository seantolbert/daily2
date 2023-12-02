import { useState, useEffect, useContext } from "react";
import { auth, fs } from "../configs/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const useAuth = () => {
  const [signupError, setSignupError] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const signup = async (email, password, username) => {
    const newUser = {
      tasks: [],
      journalEntries: [],
      days: [],
      username: "",
      uid: "",
      email: "",
    };

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(response.user, { displayName: username });
      const userRef = doc(fs, "users", response.user.uid);
      await setDoc(userRef, {
        ...newUser,
        username,
        email: response.user.email,
        uid: response.user.uid,
      });
    } catch (error) {
      setSignupError(error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoginError(error);
    }
  };

  return {
    signup,
    signupError,
    login,
    loginError,
  };
};
