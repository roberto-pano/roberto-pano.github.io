import React, { useState } from 'react';
// CSS module used for the web modal. The module lives under `site/src/pages`.
// We import it directly so the web variant can use the styles.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - CSS module path outside src; type declared in src/types/global.d.ts
import modalStyles from '../../../site/src/pages/Modal.module.css';
import { View, Text, Modal, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Gallery } from '../../shared/components/Gallery';

const IMAGES = [
  {
    src: '/assets/Kill The Pachuco Bastard.png',
    alt: 'Kill The Pachuco Bastard! 2001',
    title: 'Kill The Pachuco Bastard! 2001',
    description:
      'An oil painting that vividly captures chaos around the 1943 Zoot Suit Riots in Los Angeles. The work reflects racial tensions and the marginalization of Mexican-American communities during WWII. It juxtaposes patriotism with discrimination and calls attention to how clothing and style can become symbols of cultural identity and resistance.',
  },
  {
    src: '/assets/inmemory.jpg',
    alt: 'In Memory of Great Grandfather 1999',
    title: 'In Memory of Great Grandfather 1999',
    description:
      "House paint on wood panel, featured in 'Vincent Valdez: In Memory'. This piece preserves Mexican-American history and evokes empathy about loss and memory.",
  },
  // ... other images ...
];

export default function MexicanVisualCultureProject() {
  const [selectedImage, setSelectedImage] = useState<null | (typeof IMAGES)[0]>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Virtual Art Exhibit</Text>
      <Text style={styles.description}>
        The theme of the overall exhibit is an exploration into dual identity and how Mexican-American and Chicano/a/x artists express identity
        through various mediums and art styles.
      </Text>

      <Gallery images={IMAGES} onImagePress={setSelectedImage} />

      {Platform.OS === 'web' ? (
        // Web modal with CSS module styles
        selectedImage && (
          <div className={modalStyles.modal} onClick={() => setSelectedImage(null)}>
            <span className={modalStyles.modalClose}>&times;</span>
            <img className={modalStyles.modalContent} src={selectedImage.src} alt={selectedImage.alt} />
            <div className={modalStyles.modalCaption}>{selectedImage.alt}</div>
          </div>
        )
      ) : (
        // React Native modal
        <Modal visible={!!selectedImage} transparent animationType="fade" onRequestClose={() => setSelectedImage(null)}>
          <TouchableOpacity style={styles.modalOverlay} onPress={() => setSelectedImage(null)}>
            {selectedImage && (
              <View style={styles.modalContent}>
                <Image source={{ uri: selectedImage.src }} style={styles.modalImage} resizeMode="contain" />
                <Text style={styles.modalCaption}>{selectedImage.alt}</Text>
              </View>
            )}
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'transparent',
  },
  modalImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  modalCaption: {
    color: '#fff',
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
  },
});
