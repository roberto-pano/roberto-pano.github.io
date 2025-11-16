// Minimal hook used by the web layout. In the real app this should use
// Appearance (native) or a proper theme provider. Returning 'light' keeps
// styles deterministic for CI/typecheck.
export default function useColorScheme(): 'light' | 'dark' {
  return 'light';
}
