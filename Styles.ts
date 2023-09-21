import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";

/* StyleProp type aliases */
export type TextStyles = StyleProp<TextStyle>;
export type ViewStyles = StyleProp<ViewStyle>;
export type ImageStyles = StyleProp<ImageStyle>;

/* Aliased type for the AppStyles object below */
type AppStylesType = {
  appContainer: ViewStyles;
};

/* Styles for specific core components (not global) */
const AppStyles: AppStylesType = {
  appContainer: {
    padding: 50,
  },
};

/* Looks like this may be the prefered way to set styles, but I like the typed version above better */
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});

export { AppStylesType, AppStyles, styles };
