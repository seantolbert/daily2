import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SideTask = ({ item, onPress }) => {
  const nav = useNavigation();

  const handlePress = () => {
    console.log("yoyo");
    nav.navigate("taskDetails", item);
  };

  return (
    <Pressable style={styles.taskBox} onPress={handlePress}>
      <View
        style={{
          borderColor: "#6d98de",
          borderWidth: "1",
          borderRadius: "25",
          height: "100%",
        }}
      >
        <Text style={{ padding: 10, fontSize: 25 }}>{item.emoji}</Text>
      </View>
      <View>
        <View>
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              paddingTop: 5,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "white" }}>
            <Text style={{ fontSize: 10 }}>Lv.</Text>
            {item.level}
          </Text>
          <View
            // progress bar
            style={{
              height: 10,
              width: "50%",
              backgroundColor: "white",
              borderRadius: 25,
            }}
          >
            <View
              style={{
                backgroundColor: "#6d98de",
                width: `${item.hp}%`,
                height: "100%",
                borderRadius: 25,
              }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SideTask;

const styles = StyleSheet.create({
  taskBox: {
    flexDirection: "row",
    gap: 10,
    borderColor: "#6d98de",
    borderWidth: 1,
    borderRadius: 25,
    width: "49%",
  },
});
