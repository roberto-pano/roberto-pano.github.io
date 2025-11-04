import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';

// Import your screens
import Home from '../screens/Home';
import About from '../screens/About';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';
import MexicanVisualCultureProject from '../screens/MexicanVisualCultureProject';
import Calendar from '../screens/Calendar';

const Stack = createNativeStackNavigator();

// For web navigation linking configuration
const linking = {
  prefixes: [Platform.OS === 'web' ? '' : 'robpano://'],
  config: {
    screens: {
      Home: '/',
      About: '/about',
      Projects: '/projects',
      Contact: '/contact',
      MexicanVisualCultureProject: '/mexican-visual-culture',
      Calendar: '/calendar',
    },
  },
};

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#ffffff',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen
          name="MexicanVisualCultureProject"
          component={MexicanVisualCultureProject}
        />
        <Stack.Screen name="Calendar" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
