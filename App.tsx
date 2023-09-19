import { FC, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from "react-native";

const App: FC<unknown> = () => {
  const [inputVal, setInputVal] = useState<string>("");

  const handleInputChange = (inputText: string) => {
    setInputVal(inputText);
  };

  return (
    <View style={styles.container}>
      <Text>{(inputVal) ? inputVal : "Type something :)"}</Text>
      <TextInput
        value={inputVal} 
        onChangeText={handleInputChange}
        placeholder="Nothing to see here..."
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;