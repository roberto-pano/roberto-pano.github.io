import React from 'react';

// Minimal tab bar background shim used in the web layout. Replace with a
// real implementation as needed.
const styles = {
  container: {
    width: '100%',
    height: '100%',
  } as React.CSSProperties,
};

export default function TabBarBackground() {
  return <div style={styles.container} />;
}
