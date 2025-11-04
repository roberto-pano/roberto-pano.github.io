import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import Screen from '../components/Screen';

export default function MexicanVisualCultureProject() {
  return (
    <Screen title="Mexican Visual Culture Project">
      <View style={styles.content}>
        <Text style={styles.description}>
          The Mexican Visual Culture Project explores the rich history and
          diversity of Mexican art and visual expression through various time
          periods and mediums.
        </Text>
        <ScrollView horizontal style={styles.galleryContainer}>
          {/* Gallery items will be populated here */}
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Gallery Coming Soon</Text>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'center',
    maxWidth: 800,
    marginBottom: 24,
  },
  galleryContainer: {
    width: '100%',
    maxWidth: 1200,
    height: 300,
    marginBottom: 24,
  },
  placeholder: {
    width: 300,
    height: 200,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 2,
      },
    }),
  },
  placeholderText: {
    fontSize: 16,
    color: '#666666',
  },
});
