import Collapsible from './components/Collapsible';
import ExternalLink from './components/ExternalLink';
import HelloWave from './components/HelloWave';
import ThemedText from './components/ThemedText';
import ThemedView from './components/ThemedView';

import { ScrollView, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    width: '100%',
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 24,
    gap: 32,
  } as any,
  externalLink: {
    marginTop: 32,
  },
  themedView: {
    marginTop: 16,
    padding: 8,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <HelloWave />
        <Collapsible title="Collapsible Example">
          <ThemedText>This is inside the collapsible component.</ThemedText>
        </Collapsible>
        <ExternalLink href="https://github.com/roberto-pano" style={styles.externalLink}>
          Visit my GitHub
        </ExternalLink>
        <ThemedView style={styles.themedView} />
      </ScrollView>
    </View>
  );
}
