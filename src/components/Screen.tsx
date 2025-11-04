import React from 'react';
import {View, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import Header from '../components/Header';

interface ScreenProps {
  title: string;
  children: React.ReactNode;
}

export default function Screen({title, children}: ScreenProps) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    ...Platform.select({
      web: {marginLeft: 240},
      default: {},
    }),
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000',
  },
});
