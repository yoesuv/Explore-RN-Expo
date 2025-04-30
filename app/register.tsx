import { View, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import useUserStore from "@/src/use-user-store";
import AppButton from "./components/app-button";
import React from "react";
import AppTextField from "./components/app-text-field";
import AppPasswordField from "./components/app-password-field";

export default function Index() {
  const router = useRouter();
  const { updateName } = useUserStore();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleUsernameChange = (text: string) => {
    updateName(text);
    setUsername(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentLogin}>
        <AppTextField
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="Username"
        />
        <View style={styles.viewPassword}>
          <AppPasswordField
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </View>
        <View style={styles.viewPassword}>
          <AppPasswordField
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
          />
        </View>
        <View style={styles.viewButton}>
          <AppButton
            onPress={() => {
              router.push("/home");
            }}
            title="Register"
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
    height: 50,
    marginTop: 8,
    width: "100%",
  },
  viewPassword: {
    marginTop: 8,
    width: "100%",
  },
});
