import { FC, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import { AppStyles } from "./Styles";

const App: FC<unknown> = () => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [numberOfPresses, setNumberOfPresses] = useState<number>(0);

  const handleButtonPress = () => {
    setButtonPressed((oldVal) => !oldVal);
    setNumberOfPresses((previousCount) => (previousCount += 1));
  };

  return (
    // <View /> components act in a similar way to <div />'s where they are containers for some UI
    <View style={AppStyles.container}>
      <Text style={AppStyles.countStyles}>Number of presses: {numberOfPresses}</Text>

      {buttonPressed ? (
        <Text style={AppStyles.secretMessageStyles}>Super secret message!</Text>
      ) : (
        <Text style={AppStyles.normalMessageStyles}>Hello World!</Text>
      )}

      <Button title="Click me!" onPress={handleButtonPress} />
    </View>
  );
};

export default App;
