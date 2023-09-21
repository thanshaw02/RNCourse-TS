import { FC, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import { AppStyles, styles } from "./Styles";

const App: FC<unknown> = () => {
  return (
    // <View /> components act in a similar way to <div />'s where they are containers for some UI
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
};

export default App;
