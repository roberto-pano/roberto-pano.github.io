declare module 'expo-router' {
  const _default: any;
  export default _default;
}

declare module 'react-native/Libraries/NewAppScreen' {
  export const Colors: any;
  export const Header: any;
  export const ReloadInstructions: any;
  export const DebugInstructions: any;
  // Some examples export additional helper components used in web/App.tsx
  export const LearnMoreLinks: any;
  export default {} as any;
}

declare module 'expo-web-browser' {
  export function openBrowserAsync(url: string): Promise<void>;
  export default { openBrowserAsync };
}

declare module 'react-native-reanimated' {
  // Minimal reanimated types for CI type-checking. These are intentionally
  // loose (any) so the native implementation isn't required during tsc runs.
  const Animated: any;
  export default Animated;

  export function useAnimatedStyle<T = any>(cb: () => T): any;
  export function useSharedValue<T = any>(initial: T): { value: T };
  export function withRepeat(animation: any, iterations?: number, reverse?: boolean): any;
  export function withSequence(...items: any[]): any;
  export function withTiming(value: any, config?: any): any;
}
