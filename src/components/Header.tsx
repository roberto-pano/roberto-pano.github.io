import {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';

const routes = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Projects', path: '/projects'},
  {name: 'Contact', path: '/contact'},
];

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleResponse = useCallback((response: string) => {
    const s = response.toLowerCase();
    const message =
      s === 'yes'
        ? 'Great! Glad to hear :)'
        : s === 'no'
        ? 'I am sorry to hear that, I hope it gets better!'
        : 'No worries!';

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
    } catch (e) {
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
      if (Platform.OS === 'web' && typeof window !== 'undefined') {
        return window.location.pathname === path;
      }
      return route.name === path.replace('/', '');
    },
    [route.name],
  );

  const handlePress = useCallback(
    (path: string) => {
      if (Platform.OS === 'web' && typeof window !== 'undefined') {
        window.history.pushState({}, '', path);
      } else {
        navigation.navigate(path.replace('/', '') as never);
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      {routes.map(item => (
        <TouchableOpacity
          key={item.path}
          style={[styles.link, isActive(item.path) && styles.activeLink]}
          onPress={() => handlePress(item.path)}>
          <Text style={[styles.text, isActive(item.path) && styles.activeText]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    backgroundColor: '#f8f9fa',
    padding: 16,
    ...Platform.select({
      web: {
        width: '100%',
      },
      default: {
        width: 200,
      },
    }),
  },
  link: {
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  activeLink: {
    backgroundColor: '#e9ecef',
  },
  text: {
    fontSize: 16,
    color: '#007bff',
    textAlign: Platform.OS === 'web' ? 'center' : 'left',
  },
  activeText: {
    color: '#0056b3',
    fontWeight: 'bold',
  },
});
