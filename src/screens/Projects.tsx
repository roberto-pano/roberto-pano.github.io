import React from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import Screen from '../components/Screen';

import {useNavigate} from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Screen title="Projects">
      <View style={styles.content}>
        <Pressable
          style={styles.projectCard}
          onPress={() => navigate('/mexican-visual-culture')}>
          <Text style={styles.projectTitle}>
            Mexican Visual Culture Project
          </Text>
          <Text style={styles.projectDescription}>
            An exploration of Mexican visual culture through various mediums and
            time periods.
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  projectCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    maxWidth: 600,
    marginBottom: 16,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: '0.2s all',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
      default: {
        elevation: 2,
      },
    }),
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
});
