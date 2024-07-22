import "./../ui/components/gesture-handler.native";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "@core/services/Store";
import RootNavigator from "./RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    gap: 20,
  },
});
