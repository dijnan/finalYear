import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Profile() {
  const user = {
    username: 'JohnDoe',
    avatar: require('../../../assets/icons/avatar.png'), // Replace with the actual path to the avatar image
  };

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
