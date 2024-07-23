import { Image, StyleSheet, Button } from "react-native";

import ParallaxScrollView from "@ui/components/ParallaxScrollView";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@resources/images/react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Button
        onPress={() => {
          navigation.navigate("DRINK_LISTING");
        }}
        title="Drink Listing"
      />

      <Button
        onPress={() => {
          navigation.navigate("FLASH_CARD");
        }}
        title="Flash card"
      />

      <Button
        onPress={() => {
          navigation.navigate("RANDOM_DRINK");
        }}
        title="Random Drink"
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
