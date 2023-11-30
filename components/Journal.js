import {
  Dimensions,
  InputAccessoryView,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { prompts } from "../data/prompts";
import useRealTime from "../hooks/useRealTime";

const Journal = ({ journalText, onChange }) => {
  const randomCategory = Math.floor(Math.random() * (prompts.length - 1));
  const randomPrompt =
    prompts[randomCategory].prompts[Math.floor(Math.random() * 5)];

  const { data, updateData } = useRealTime("users");

  // console.log(data);
  // uniqe data tbd
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

    updateData(journalEntries);
  };

  //   style={{ flex: 1 }}
  // >
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
        Journal
      </Text>
      <ScrollView keyboardDismissMode="interactive">
        <View style={{ padding: 10 }}>
          <TextInput
            multiline
            value={journalText}
            placeholder={randomPrompt}
            placeholderTextColor="#656565"
            onChangeText={onChange}
            inputAccessoryViewId={inputAccessoryViewId}
            style={{ fontSize: 15, color: "white" }}
          />
        </View>
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewId}>
        <View>
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
      </InputAccessoryView>
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  container: {
    // height: Dimensions.get("window").height,
    height: 400,
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
