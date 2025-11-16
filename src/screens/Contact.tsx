import React from 'react';
import { View, Text, StyleSheet, Platform, Linking } from 'react-native';
import Screen from '../components/Screen';

export default function Contact() {
  const handleEmailPress = () => {
    if (Platform.OS === 'web') {
      window.location.href = 'mailto:contact@example.com';
    } else {
      Linking.openURL('mailto:contact@example.com');
    }
  };

  return (
    <Screen title="Contact">
      <View style={styles.content}>
        <Text style={styles.text}>I'd love to hear from you! Feel free to reach out through any of the following methods:</Text>
        <Text style={styles.linkText} onPress={handleEmailPress}>
          Email: contact@example.com
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'center',
    maxWidth: 600,
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 10,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
      default: {
        textDecorationLine: 'underline',
      },
    }),
  },
});
