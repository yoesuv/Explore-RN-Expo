import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppButton from "./components/app-button";
import React from "react";
import AppTextField from "./components/app-text-field";
import AppPasswordField from "./components/app-password-field";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLogin } from "@/src/hooks/use-login";
import { LoginRequest } from "@/src/models/login-request";
import { keyEmail, keyFirstName, keyImage, keyLastName } from "./constants";

interface ILoginInput {
  username: string;
  password: string;
}

export default function Index() {
  const router = useRouter();
  const { mutate, isPending } = useLogin();

  const schema = Yup.object().shape({
    username: Yup.string()
      .required("enter an username")
      .min(5, "username min 5 character"),
    password: Yup.string()
      .required("enter a password")
      .min(5, "password min 5 character"),
  });

  const {
    control,
    formState,
    watch,
    formState: { errors },
  } = useForm<ILoginInput>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { isDirty, isValid } = formState;

  const handleLogin = (credentials: LoginRequest) => {
    mutate(credentials, {
      onSuccess: async (data) => {
        console.log("---------------");
        console.log(`First Name: ${data.firstName}`);
        console.log(`Email: ${data.email}`);
        await AsyncStorage.setItem(keyFirstName, data.firstName);
        await AsyncStorage.setItem(keyLastName, data.lastName);
        await AsyncStorage.setItem(keyEmail, data.email);
        await AsyncStorage.setItem(keyImage, data.image);
        router.replace("/home");
      },
      onError: (error) => {
        Alert.alert("Error", "Invalid username or password");
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentLogin}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <AppTextField
              value={value}
              onChangeText={onChange}
              placeholder="Name"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.viewPassword}>
              <AppPasswordField
                value={value}
                onChangeText={onChange}
                placeholder="Password"
              />
            </View>
          )}
        />
        <View style={styles.viewButton}>
          <AppButton
            onPress={() => {
              var name = watch("username");
              var password = watch("password");
              const dataLogin = {
                username: name,
                password: password,
              };
              handleLogin(dataLogin);
            }}
            title="Login"
            disabled={!isDirty || !isValid}
            isLoading={isPending}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("/register");
          }}
        >
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
    width: "100%",
  },
  viewPassword: {
    marginTop: 8,
    width: "100%",
  },
  textRegister: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
