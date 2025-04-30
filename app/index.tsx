import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import useUserStore from "@/src/use-user-store";
import AppButton from "./components/app-button";
import React from "react";
import AppTextField from "./components/app-text-field";
import AppPasswordField from "./components/app-password-field";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface ILoginInput {
  username: string;
  password: string;
}

export default function Index() {
  const router = useRouter();
  const { updateName } = useUserStore();

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
    handleSubmit,
    formState,
    watch,
    formState: { errors },
  } = useForm<ILoginInput>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { isDirty, isValid } = formState;

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
              updateName(name);
              router.push("/home");
            }}
            title="Login"
            disabled={!isDirty || !isValid}
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
