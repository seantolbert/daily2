import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { prompts } from "../data/prompts";

const Journal = ({ journalText, setJouralText }) => {
  const randomCategory = Math.floor(Math.random() * (prompts.length - 1));
  const randomPrompt =
    prompts[randomCategory].prompts[Math.floor(Math.random() * 5)];

  // console.log(prompts[randomCategory].title);
  // console.log(randomPrompt);

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
      <View style={{ padding: 10 }}>
        <TextInput
          multiline
          placeholder={randomPrompt}
          placeholderTextColor="#656565"
          style={{ fontSize: 15 }}
        />
      </View>
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  container: {},
});

// if there is not currently a journal emntry for the day,
// the journal section on the dashboard will have a bunch of
// categories instead and you will flip through the categories.
//  once a category is selected a prompt from within that category will
// show at the top of the screen
// there will also be a random button to pick a random prompt
// The prompts will not be locked in or tied to the resulting journal object.
