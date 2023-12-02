import { useState, useEffect } from "react";
import { auth, fs } from "../configs/firebase";

import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = query(
      collection(fs, c),
      where("uid", "==", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsubscribe();
  }, [c]);
};
