import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Image } from "expo-image";
import {
  keyEmail,
  keyFirstName,
  keyImage,
  keyLastName,
  loremShort,
} from "../constants";
import AppButton from "./app-button";
import { useEffect, useState } from "react";

export default function CardUser() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const getEmail = async () => {
    const email = await AsyncStorage.getItem(keyEmail);
    if (email) {
      setEmail(email);
    }
  };

  const getName = async () => {
    const firstName = await AsyncStorage.getItem(keyFirstName);
    const lastName = await AsyncStorage.getItem(keyLastName);
    setName(firstName + " " + lastName);
  };

  const getAvatar = async () => {
    const image = await AsyncStorage.getItem(keyImage);
    if (image) {
      setAvatar(image);
    }
  };

  useEffect(() => {
    getName();
    getEmail();
    getAvatar();
  }, [email, name, avatar]);

  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text numberOfLines={2} style={styles.bio}>
        {loremShort}
      </Text>
      <View style={styles.follow}>
        <AppButton onPress={() => {}} title="Follow" />
        <View style={{ width: 16 }} />
        <TouchableOpacity style={styles.buttonSend}>
          <View>
            <Image
              source={require("../../assets/images/icon-send.png")}
              contentFit="cover"
              style={styles.iconSend}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
  email: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#000",
    marginTop: 8,
  },
  bio: {
    fontSize: 12,
    textAlign: "center",
    textOverflow: "ellipsis",
    color: "#414141",
    marginTop: 16,
  },
  follow: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonSend: {
    backgroundColor: "#CDE1ED",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 24,
    height: 24,
  },
});
