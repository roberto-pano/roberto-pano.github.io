import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, FlatList, Dimensions } from 'react-native';

const numColumns = Platform.select({
  web: 3,
  default: 1, // Mobile devices default to 1 column, can adjust based on screen width
});

// Calculate item width based on screen width and number of columns
const getItemWidth = () => {
  const screenWidth = Dimensions.get('window').width;
  const padding = 32; // Total horizontal padding
  const spacing = 16 * (numColumns - 1); // Gap between items
  return (screenWidth - padding - spacing) / numColumns;
};

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface GalleryProps {
  images: GalleryImage[];
  onImagePress?: (image: GalleryImage) => void;
}

export const Gallery = ({ images, onImagePress }: GalleryProps) => {
  const renderItem = ({ item }: { item: GalleryImage }) => (
    <TouchableOpacity style={styles.galleryItem} onPress={() => onImagePress?.(item)}>
      <Image
        source={Platform.OS === 'web' ? { uri: item.src } : require(item.src)}
        style={styles.image}
        accessibilityLabel={item.alt}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title || item.alt}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      columnWrapperStyle={Platform.OS === 'web' ? styles.row : undefined}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  galleryItem: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    ...Platform.select({
      web: {
        maxWidth: getItemWidth(),
      },
      default: {
        width: '100%',
      },
    }),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
