declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const content: string;
  export default content;
}

// Allow importing raw text for small HTML snippets used during migration
declare module '*.html' {
  const content: string;
  export default content;
}
/// <reference types="react" />

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare global {
  interface Window {
    prompt: (message: string) => string | null;
    alert: (message: string) => void;
    location: { pathname: string };
    history: { pushState: (data: any, unused: string, url?: string) => void };
  }
}

export {};
