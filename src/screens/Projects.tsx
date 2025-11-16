import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform, Linking } from 'react-native';
import Screen from '../components/Screen';

import { useNavigate } from 'react-router-dom';

const flexRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 24,
  marginBottom: 16,
  alignItems: 'center',
};

const centerTextStyle: React.CSSProperties = {
  textAlign: 'center',
};

const smallTextStyle: React.CSSProperties = {
  fontSize: 14,
  color: '#666',
};

const largeNumStyle: React.CSSProperties = {
  fontSize: 28,
  color: '#111',
};

const debugStyle: React.CSSProperties = {
  marginBottom: 16,
  fontSize: 12,
  color: '#444',
  textAlign: 'left',
  maxWidth: 700,
};

const errorStyle: React.CSSProperties = {
  color: 'red',
};

export default function Projects() {
  const navigate = useNavigate();
  const [debugInfo, setDebugInfo] = React.useState<any>(null);
  const rasmusRef = React.useRef<HTMLDivElement | null>(null);
  const interRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }

    const run = async () => {
      try {
        // Wait for fonts to be ready
        await (document as any).fonts.ready;

        const rasmusEl = rasmusRef.current;
        const interEl = interRef.current;

        const rasmusStyles = rasmusEl ? window.getComputedStyle(rasmusEl) : null;
        const interStyles = interEl ? window.getComputedStyle(interEl) : null;

        const fontsList: string[] = [];
        // collect loaded fonts
        (document as any).fonts.forEach((f: any) => fontsList.push(f.family));

        setDebugInfo({
          fontsList,
          rasmus: rasmusStyles
            ? {
                fontFamily: rasmusStyles.fontFamily,
                fontFeatureSettings: (rasmusStyles as any).fontFeatureSettings || null,
              }
            : null,
          inter: interStyles
            ? {
                fontFamily: interStyles.fontFamily,
                fontFeatureSettings: (interStyles as any).fontFeatureSettings || null,
              }
            : null,
        });
      } catch (e) {
        setDebugInfo({ error: String(e) });
      }
    };

    run();
  }, []);

  return (
    <Screen title="Projects">
      <View style={styles.content}>
        {/* Visual test: compare default numbers vs Rasmus+features (web only) */}
        {Platform.OS === 'web' && (
          <div style={flexRowStyle}>
            <div style={centerTextStyle}>
              <div style={smallTextStyle}>Default</div>
              <div style={largeNumStyle}>4444</div>
            </div>
            <div style={centerTextStyle}>
              <div style={smallTextStyle}>Rasmus + features</div>
              <div ref={rasmusRef} className="nums font-rasmus" style={largeNumStyle}>
                4444
              </div>
            </div>
          </div>
        )}
        {/* Also show Inter variable with numeric features for comparison */}
        {Platform.OS === 'web' && (
          <div style={flexRowStyle}>
            <div style={centerTextStyle}>
              <div style={smallTextStyle}>Default (Inter)</div>
              <div style={largeNumStyle}>4444</div>
            </div>
            <div style={centerTextStyle}>
              <div style={smallTextStyle}>InterVar + features</div>
              <div ref={interRef} className="nums font-sans" style={largeNumStyle}>
                4444
              </div>
            </div>
          </div>
        )}

        {/* Debug output so you can see which fonts loaded and computed font-feature-settings */}
        {Platform.OS === 'web' && debugInfo && (
          <div style={debugStyle}>
            <div>
              <strong>Loaded fonts:</strong>{' '}
              {Array.isArray(debugInfo.fontsList) ? debugInfo.fontsList.join(', ') : JSON.stringify(debugInfo.fontsList)}
            </div>
            <div>
              <strong>Rasmus computed:</strong>{' '}
              {debugInfo.rasmus ? `${debugInfo.rasmus.fontFamily} | features: ${debugInfo.rasmus.fontFeatureSettings}` : '—'}
            </div>
            <div>
              <strong>Inter computed:</strong>{' '}
              {debugInfo.inter ? `${debugInfo.inter.fontFamily} | features: ${debugInfo.inter.fontFeatureSettings}` : '—'}
            </div>
            {debugInfo.error && <div style={errorStyle}>Error: {debugInfo.error}</div>}
          </div>
        )}
        <Pressable style={styles.projectCard} onPress={() => navigate('/mexican-visual-culture')}>
          <Text style={styles.projectTitle}>Mexican Visual Culture Project</Text>
          <Text style={styles.projectDescription}>An exploration of Mexican visual culture through various mediums and time periods.</Text>
        </Pressable>
        <Pressable
          style={[styles.projectCard, styles.githubCard]}
          onPress={() => {
            const url = 'https://github.com/roberto-pano';
            if (Platform.OS === 'web' && typeof window !== 'undefined') {
              window.open(url, '_blank');
            } else {
              Linking.openURL(url).catch(() => {});
            }
          }}
        >
          <Text style={styles.projectTitle}>View on GitHub</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  projectCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    maxWidth: 600,
    marginBottom: 16,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: '0.2s all',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
      default: {
        elevation: 2,
      },
    }),
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  githubCard: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
