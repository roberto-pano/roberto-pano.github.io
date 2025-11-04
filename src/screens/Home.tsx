import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from '../components/Screen';

export default function Home() {
  return (
    <Screen title="Welcome">
      <View style={styles.content}>
        <Text style={styles.text}>
          Welcome to my portfolio! I am a software developer passionate about
          creating innovative solutions.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'center',
    maxWidth: 600,
  },
});
