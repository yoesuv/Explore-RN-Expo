// TextField.tsx
import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface AppTextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const AppTextField: React.FC<AppTextFieldProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      style={styles.textField}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textField: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default AppTextField;
