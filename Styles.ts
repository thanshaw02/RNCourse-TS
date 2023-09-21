import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

/* StyleProp type aliases */
export type TextStyles = StyleProp<TextStyle>;
export type ViewStyles = StyleProp<ViewStyle>;

/* Styles that are globally applied */
const globalStyles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

/* Styles for specific core components (not global) */
const viewStyles: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
};

const countStyles: TextStyles = {
  marginBottom: 30,
};

const normalMessageStyles: TextStyles = {
  marginBottom: 15,
};

const secretMessageStyles: TextStyles = {
  marginBottom: 15,
  color: "orange",
};

export {
  countStyles,
  globalStyles,
  normalMessageStyles,
  secretMessageStyles,
  viewStyles,
};
