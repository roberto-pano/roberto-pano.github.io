/// <reference types="react" />

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare global {
  interface Window {
    prompt: (message: string) => string | null;
    alert: (message: string) => void;
    location: {pathname: string};
    history: {pushState: (data: any, unused: string, url?: string) => void};
  }
}

export {};
