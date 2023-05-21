import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; //
import {auth} from "../../../firebaseConfig"

export default function SignupForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      // Handle password confirmation error
      return;
    }

    console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-up
        console.log(userCredential.user)
      })
      .catch((error) => {
        // Handle sign-up error
        console.log(error)
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
      <Button
        title="Sign up"
        onPress={handleSignup}
      />
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Log in')}>
        Already have an account? Log in here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  loginLink: {
    marginVertical: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
