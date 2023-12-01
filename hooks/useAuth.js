import { useState, useEffect } from "react";
import { auth, fs } from "../configs/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  //   sendEmailVerification
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const useAuth = () => {
  const [signupError, setSignupError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [resetPassError, setResetPassError] = useState(null);

  const signup = async (email, password, username) => {
    const newUser = {
      tasks: [],
      journalEntries: [],
      days: [],
      username: "",
      uid: "",
    };

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(res.user, { username }).catch((err) =>
        console.log("firebase '.catch' method: " + err.message)
      );
      const userRef = doc(fs, "users", res.user.uid);
      await setDoc(userRef, { ...newUser, uid: res.user.uid });
      console.log(
        "username: " +
          res.user.username +
          "tasks: " +
          tasks +
          "journalEntries: " +
          journalEntries
      );
    } catch (error) {
      setSignupError(error);
      console.log("after catch method: " + error.message);
    }
  };
};
