import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ListItems = ({ data, deleteItem }) => {
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <View style={styles.itemBox} key={item.id}>
            <Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity>
              <Icon
                name="trash-alt"
                solid
                style={{ fontSize: 20, color: "red" }}
                onPress={() => {
                  deleteItem(item.id);
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 0.9,
    overflow: "hidden",
  },
  itemBox: {
    backgroundColor: "white",
    minHeight: 45,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  item: {
    fontSize: 16,
    width: "95%",
  },
});
