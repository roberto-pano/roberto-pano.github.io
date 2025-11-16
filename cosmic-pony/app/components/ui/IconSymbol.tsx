import React from 'react';

export const IconSymbol = ({ size = 24, name, color }: { size?: number; name: string; color?: string }) => {
  // Minimal cross-platform stub for the app layout. Replace with a proper icon
  // implementation (lucide-react, @expo/vector-icons, or SF Symbols) if needed.
  return (
    <span style={{ display: 'inline-block', width: size, height: size, color: color ?? 'currentColor' }} aria-hidden>
      {name}
    </span>
  );
};

export default IconSymbol;
