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

type AppStylesType = {
  container: ViewStyles;
  countStyles: TextStyles;
  normalMessageStyles: TextStyles;
  secretMessageStyles: TextStyles;
};

/* Styles for specific core components (not global) */
const AppStyles: AppStylesType = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countStyles: {
    marginBottom: 30,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor: "red",
  },
  normalMessageStyles: {
    marginBottom: 15,
  },
  secretMessageStyles: {
    marginBottom: 15,
    color: "orange",
  },
};

/* Looks like this may be the prefered way to set styles, but I like the typed version above better */
const AppStylesStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countStyles: {
    marginBottom: 30,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor: "red",
  },
  normalMessageStyles: {
    marginBottom: 15,
  },
  secretMessageStyles: {
    marginBottom: 15,
    color: "orange",
  },
});

export { AppStylesType, AppStyles };
