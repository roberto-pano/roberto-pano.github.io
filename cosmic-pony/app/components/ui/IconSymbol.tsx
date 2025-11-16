import React from 'react';

const iconBaseStyle = (size: number | undefined, color?: string) => ({
  display: 'inline-block',
  width: size,
  height: size,
  color: color ?? 'currentColor',
});

export const IconSymbol = ({ size = 24, name, color }: { size?: number; name: string; color?: string }) => {
  // Minimal cross-platform stub for the app layout. Replace with a proper icon
  // implementation (lucide-react, @expo/vector-icons, or SF Symbols) if needed.
  const style = iconBaseStyle(size, color);
  return (
    <span style={style} aria-hidden>
      {name}
    </span>
  );
};

export default IconSymbol;
