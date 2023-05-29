import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ToastAndroid,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth"; //
import { auth } from "../../../firebaseConfig";
import { useAppContext } from "../../contexts/AppProvider";

export default function SignupForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useAppContext();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      // Handle password confirmation error
      ToastAndroid.show("Password doesn't match");
      return;
    }

    createUserWithEmailAndPassword(auth, email.trim(), password.trim())
      .then((userCredential) => {
        ToastAndroid.show("Signed up successfully");
        setUser(userCredential.user);
      })
      .catch((error) => {
        ToastAndroid.show("Sign up failed");
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Sign up" onPress={handleSignup} />
      <Text
        style={styles.loginLink}
        onPress={() => navigation.navigate("Log in")}
      >
        Already have an account? Log in here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  loginLink: {
    marginVertical: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});
