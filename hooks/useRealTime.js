import { useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { db } from "../configs/firebase";

const useRealTime = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // TODO
  // add actual user information with context
  const userId = 12345;

  const database = db;

  useEffect(() => {
    // Reference to the specified path in the Realtime Database
    const dataRef = ref(database, path);

    // Function to handle changes in the data
    const handleData = (snapshot) => {
      const val = snapshot.val();
      setData(val);
    };

    // Function to handle errors
    const handleError = (error) => {
      setError(error.message);
    };

    // Set up a listener for changes in the data
    const dataListener = onValue(dataRef, handleData, { errorEvent: "error" });

    return () => {
      // Clean up the listener when the component unmounts
      if (dataListener) {
        dataListener();
      }
    };
  }, [database, path]);

  // Function to update data in the database
  const updateData = (newData) => {
    const dataRef = ref(database, path);

    try {
      set(dataRef, newData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, error, updateData };
};

export default useRealTime;
