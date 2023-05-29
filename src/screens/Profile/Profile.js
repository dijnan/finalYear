import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { useAppContext } from "../../contexts/AppProvider";

export default function Profile() {
  const { user, setUser } = useAppContext();

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            user.photoURL || "https://ui-avatars.com/api/?name=" + user.email,
        }}
        style={styles.avatar}
      />
      <Text style={styles.username}>{user.email}</Text>
      <Button title="Log Out" onPress={() => setUser(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

//dynamic
/*import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { auth } from '../../../firebaseConfig.js';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is signed in, update the `user` object
        setUser({
          username: currentUser.displayName,
          avatar: currentUser.photoURL,
        });
      } else {
        // User is signed out, clear the `user` object
        setUser(null);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  if (!user) {
    // User is not signed in, handle this case accordingly (e.g., redirect to sign-in screen)
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.username}>{user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
*/
