import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const TaskDetailsScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { params } = route;

  const notes = [
    "what is the real point of these",
    "what is the real point of these",
    "looks like this could be an array, but we will likely need id's",
    "Lorem Ipsum blah blah blah",
    "what is the real point of these",
    "looks like this could be an array, but we will likely need id's",
    "Lorem Ipsum blah blah blah",
    "looks like this could be an array, but we will likely need id's",
    "what is the real point of these",
    "Lorem Ipsum blah blah blah",
    "looks like this could be an array, but we will likely need id's",
    "Lorem Ipsum blah blah blah",
    "Lorem Ipsum blah blah blah",
    "Lorem Ipsum blah blah blah",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ flexDirection: "row", height: "50%", width: "100%", flex: 1 }}
      >
        <View style={[styles.topSection, { flex: 2 }]}>
          <Text
            style={{ color: "white", position: "absolute", top: 20, left: 20 }}
          >
            <Text>Lv.</Text>
            {params.level}
          </Text>
          <Text style={{ fontSize: 100 }}>{params.emoji}</Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              position: "absolute",
              bottom: 20,
              right: 20,
            }}
          >
            {params.title}
          </Text>
        </View>
        <View
          style={{
            // borderWidth: 1,
            // borderColor: "white",
            height: "100%",
            flex: 1,
            borderRadius: 20,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Rank</Text>
            <Text style={{ color: "white", fontSize: 30 }}>1</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              // flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ color: "white" }}>Best Streak</Text>
            <Text style={{ color: "white", fontSize: 30 }}>32</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              // flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ color: "white" }}>next goal</Text>
            <Text style={{ color: "white", fontSize: 30 }}>40</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderRadius: 20,
          gap: 20,
          // justifyContent: "gap",
          // borderWidth: 1,
          // borderColor: "white",
        }}
      >
        <View style={{ paddingTop: 10 }}>
          <Pressable
            style={{
              // width: "100%",
              borderColor: "green",
              borderWidth: 2,
              borderRadius: 10,
              paddingVertical: 30,
              justifyContent: "center",
              alignItems: "center",
              // margin: 10
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              Completed today
            </Text>
          </Pressable>
        </View>
        <Text style={{ color: "white", padding: 20, fontSize: 20 }}>
          {params.description}
        </Text>

        <Text
          style={{
            textTransform: "uppercase",
            letterSpacing: 10,
            color: "white",
          }}
        >
          Notes
        </Text>

        <View>
          {notes.map((note) => (
            <Text style={{ color: "white" }}>{note}</Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  topSection: {
    borderWidth: 1,
    borderColor: "white",
    height: "100%",
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
