import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Icon
        name="cart-plus"
        brand
        style={{ fontSize: 28, paddingRight: 20, color: "white" }}
      />
      <Text style={styles.headerText}>Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 22,
    color: "white",
  },
});

export default Header;
