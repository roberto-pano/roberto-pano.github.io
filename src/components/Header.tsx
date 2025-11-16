import { useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate, useLocation } from 'react-router-dom';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header({ title }: { title?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleResponse = useCallback((response: string) => {
    const s = response.toLowerCase();
    const message = s === 'yes' ? 'Great! Glad to hear :)' : s === 'no' ? 'I am sorry to hear that, I hope it gets better!' : 'No worries!';

    Alert.alert('Response', message);
  }, []);

  const checkPrompt = useCallback(async () => {
    try {
      const seen = await AsyncStorage.getItem('promptResponse');
      if (!seen) {
        Alert.prompt('Quick Question', 'Are you having a great day?', [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => handleResponse(''),
          },
          {
            text: 'OK',
            onPress: (value?: string) => handleResponse(value || ''),
          },
        ]);
        await AsyncStorage.setItem('promptResponse', 'true');
      }
    } catch {
      // ignore if storage not available
    }
  }, [handleResponse]);

  useEffect(() => {
    checkPrompt().catch(() => {
      // Handle any errors silently
    });
  }, [checkPrompt]);

  const isActive = useCallback(
    (path: string) => {
      if (Platform.OS === 'web') {
        return location.pathname === path;
      }
      // For native platforms, compare the route name
      return location.pathname.replace('/', '') === path.replace('/', '');
    },
    [location],
  );

  const handlePress = useCallback(
    (path: string) => {
      if (Platform.OS === 'web') {
        navigate(path);
      } else {
        // For native platforms, use the simplified path
        navigate(path.replace('/', ''));
      }
    },
    [navigate],
  );

  // If not web, render a simple top header that shows current page title
  if (Platform.OS !== 'web') {
    return (
      <View style={styles.nativeHeader}>
        <Text style={styles.nativeTitle}>{title || 'App'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {routes.map((item) => (
        <TouchableOpacity key={item.path} style={[styles.link, isActive(item.path) && styles.activeLink]} onPress={() => handlePress(item.path)}>
          <Text style={[styles.text, isActive(item.path) && styles.activeText]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: Platform.OS === 'web' ? 'column' : 'column',
    backgroundColor: '#f8f9fa',
    padding: 16,
    ...Platform.select({
      web: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 220,
        paddingTop: 24,
        zIndex: 1000,
      },
      default: {
        width: '100%',
      },
    }),
  },
  link: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 4,
  },
  // Use a left accent for active state instead of changing the whole link background
  activeLink: {
    backgroundColor: 'transparent',
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
    paddingLeft: 8,
  },
  text: {
    fontSize: 16,
    color: '#007bff',
    textAlign: Platform.OS === 'web' ? 'center' : 'left',
  },
  activeText: {
    color: '#0056b3',
    fontWeight: '700',
  },
  nativeHeader: {
    width: '100%',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  nativeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
});
