import {
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import useUserStore from "@/src/use-user-store";

export default function Index() {
  const router = useRouter();
  const { updateName } = useUserStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentLogin}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChange={(e) => updateName(e.nativeEvent.text)}
        />
        <View style={styles.viewButton}>
          <Button
            onPress={() => {
              router.replace("/home");
            }}
            title="Login"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(9, 84, 115, 0.05)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentLogin: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  viewButton: {
    marginTop: 8,
    width: "100%",
  },
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
