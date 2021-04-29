import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import ListItems from "./components/ListItems";

const App = () => {
  const [data, setData] = useState([]);

  const deleteItem = (id) => {
    setData(
      data.filter((ele) => {
        if (ele.id != id) return ele;
      })
    );
  };

  const addItem = (value) => {
    if (!value) {
      Alert.alert("Error!", "Note Cannot Be Empty");
    } else {
      setData((data) =>
        [{ id: parseInt(Math.random() * 10000), text: value }].concat(data)
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Input addItem={addItem} />
      <ListItems data={data} deleteItem={deleteItem} />
      <Button
        title="Delete All"
        onPress={() => {
          setData([]);
        }}
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
