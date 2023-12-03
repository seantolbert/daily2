import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { prompts } from "../data/prompts";
import useRealTime from "../hooks/useRealTime";
import { FontAwesome } from "@expo/vector-icons";
import { DayContext } from "../context/DayContext";

const Journal = ({ journalText, onChange }) => {
  const [prompt, setPrompt] = useState("");

  const { dispatch } = useContext(DayContext);

  useEffect(() => {
    const randomCategory = Math.floor(Math.random() * (prompts.length - 1));
    const initialPrompt =
      prompts[randomCategory].prompts[Math.floor(Math.random() * 5)];
    setPrompt(initialPrompt);
  }, []);

  // const { updateData } = useRealTime("users");

  const inputAccessoryViewId = "neat123";

  const handleSubmit = () => {
    const paragraphs = journalText.split("\n").map((p) => p.trim());

    
    const journalEntries = [
      {
        id: 8767658765,
        userId: 12345,
        title: "Beginnings",
        paragraphs: [
          "what",
          "what",
          "what",
          "what",
          "what",
          "what",
          "what",
          "what",
        ],
      },
      {
        id: 8745698345,
        userId: 12345,
        title: null,
        paragraphs,
      },
    ];
    
    dispatch({ type: "UPDATE_JOURNAL", payload: journalText });
    updateData(journalEntries);
  };
  
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          textTransform: "uppercase",
          letterSpacing: 10,
          fontSize: 15,
          textAlign: "center",
        }}
      >
        Today's Journal
      </Text>

      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", width: "75%" }}>{prompt}</Text>
        <Pressable>
          <FontAwesome name="random" size={30} color="white" />
        </Pressable>
      </View>
      <View style={{ padding: 10 }}>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            multiline
            value={journalText}
            placeholder="think here ..."
            placeholderTextColor="#656565"
            onChangeText={onChange}
            inputAccessoryViewId={inputAccessoryViewId}
            style={{
              fontSize: 18,
              color: "white",
              height: Dimensions.get("window").height / 3,
            }}
          />
        </ScrollView>
        <Pressable
          onPress={handleSubmit}
          style={{
            padding: 10,
            width: "100%",
            borderColor: "lightblue",
            borderRadius: 10,
            borderWidth: 1,
          }}
        >
          <Text style={{ color: "lightblue" }}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    // height: 200,
    flex: 1,
  },
});

// if there is not currently a journal emntry for the day,
// the journal section on the dashboard will have a bunch of
// categories instead and you will flip through the categories.
//  once a category is selected a prompt from within that category will
// show at the top of the screen
// there will also be a random button to pick a random prompt
// The prompts will not be locked in or tied to the resulting journal object.
