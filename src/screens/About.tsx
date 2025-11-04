import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from '../components/Screen';

export default function About() {
  return (
    <Screen title="About Me">
      <View style={styles.content}>
        <Text style={styles.text}>
          I am a software developer with a passion for creating innovative
          solutions and learning new technologies. My experience includes web
          development, mobile applications, and cross-platform solutions.
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
