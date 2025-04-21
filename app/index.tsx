import { Text, View, Image, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/react-logo.png")} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        title="Click Me"
        onPress={() => {
          alert("Hello World");
        }}
      />
    </View>
  );
}
