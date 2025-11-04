import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import Screen from '../components/Screen';

const IMAGES = [
  {
    src: '/assets/Kill The Pachuco Bastard.png',
    alt: 'Kill The Pachuco Bastard! 2001',
    title: 'Kill The Pachuco Bastard! 2001',
  },
  {
    src: '/assets/inmemory.jpg',
    alt: 'In Memory of Great Grandfather 1999',
    title: 'In Memory of Great Grandfather 1999',
  },
  {
    src: '/assets/The Strangest Fruit Part 1.png',
    alt: 'The Strangest Fruit Part 1',
    title: 'The Strangest Fruit (Part 1)',
  },
  {
    src: '/assets/The Strangest Fruit Part 2.png',
    alt: 'The Strangest Fruit Part 2',
    title: 'The Strangest Fruit (Part 2)',
  },
  {
    src: '/assets/The Strangest Fruit Part 3.png',
    alt: 'The Strangest Fruit Part 3',
    title: 'The Strangest Fruit (Part 3)',
  },
  {src: '/assets/NastyNez.jpg', alt: 'Nasty Nez', title: 'Nasty Nez'},
  {src: '/assets/Untitled1.png', alt: 'Untitled 1', title: 'Untitled'},
  {src: '/assets/Untitled2.png', alt: 'Untitled 2', title: 'Untitled'},
  {src: '/assets/Untitled3.png', alt: 'Untitled 3', title: 'Untitled'},
  {
    src: '/assets/turbulent.png',
    alt: 'Turbulent 2015',
    title: 'Turbulent 2015',
  },
  {
    src: '/assets/Souvenirs.png',
    alt: 'Souvenirs 2014',
    title: 'Souvenirs 2014',
  },
  {
    src: '/assets/Isolation.png',
    alt: 'Isolation (COVID Series 2020)',
    title: 'Isolation (COVID Series 2020)',
  },
];

export default function MexicanVisualCultureProject() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  function openModal(img: {src: string; alt?: string}) {
    setModalSrc(img.src);
    setModalAlt(img.alt || '');
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalSrc('');
    setModalAlt('');
  }

  return (
    <Screen title="Mexican Visual Culture Project">
      <View style={styles.container}>
        <Text style={styles.description}>
          The Mexican Visual Culture Project explores Mexican-American and
          Chicano/a/x artistic responses to identity, community, and history.
        </Text>

        <ScrollView contentContainerStyle={styles.grid}>
          {IMAGES.map((img, i) => (
            <View key={i} style={styles.card}>
              <TouchableOpacity onPress={() => openModal(img)}>
                <Image
                  source={{uri: img.src}}
                  style={styles.image}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text style={styles.title}>{img.title}</Text>
            </View>
          ))}
        </ScrollView>

        <Modal visible={modalOpen} transparent animationType="fade">
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={closeModal}
            activeOpacity={1}>
            <Image
              source={{uri: modalSrc}}
              style={styles.modalImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Modal>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    maxWidth: 900,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 8,
  },
  card: {
    width: 300,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    ...Platform.select({
      web: {boxShadow: '0 2px 6px rgba(0,0,0,0.08)'},
      default: {elevation: 2},
    }),
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '80%',
  },
});
