import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const Input = ({ addItem }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: "70%", backgroundColor: "white", paddingVertical: 3 }}
        placeholder="Enter item"
        value={value}
        onChangeText={(Text) => {
          setValue(Text);
        }}
      />
      <Button
        title="Add"
        style={{ width: "20%" }}
        onPress={() => {
          addItem(value);
          setValue("");
        }}
      ></Button>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
    height: "8%",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
});
