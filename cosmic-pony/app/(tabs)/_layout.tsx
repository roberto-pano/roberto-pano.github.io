import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Tabs } from 'expo-router';
import { IconSymbol } from '../components/ui/IconSymbol';
import TabBarBackground from '../components/ui/TabBarBackground';
import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NavBar from '../components/NavBar';

function TabIconHouse({ color }: { color?: string }) {
  return <IconSymbol size={28} name="house.fill" color={color} />;
}

function TabIconPaper({ color }: { color?: string }) {
  return <IconSymbol size={28} name="paperplane.fill" color={color} />;
}

// Load shadcn sidebar module dynamically to avoid type conflicts with react-native typings
let SidebarModule: any = null;
try {
  // require only when available (Vite will bundle this for web)
  // @ts-ignore
  SidebarModule = require('../../../src/components/ui/sidebar');
} catch {
  // ignore if not resolvable in native environments
  SidebarModule = null;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [_sidebarCollapsed, _setSidebarCollapsed] = useState(true);

  // Footer color matches sidebar for blend
  const footerBg = colorScheme === 'dark' ? '#222' : '#fff';
  const footerBorder = colorScheme === 'dark' ? '#333' : '#eee';

  // Styles extracted to top-level constants to avoid inline-style ESLint warnings
  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
  };

  const footerStyle: React.CSSProperties = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100vw',
    height: 48,
    backgroundColor: footerBg,
    borderTop: `1px solid ${footerBorder}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 4000,
  };

  const footerLogoStyle: React.CSSProperties = {
    width: 60,
    height: '100%',
  };

  const footerCenterStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'center',
    color: colorScheme === 'dark' ? '#aaa' : '#888',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const SidebarAvailable = Platform.OS === 'web' && SidebarModule;

  const sidebarWrapperStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
  };

  const sidebarInnerColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };

  const sidebarPadding12Style: React.CSSProperties = {
    padding: 12,
  };

  const sidebarFooterTextStyle: React.CSSProperties = {
    padding: 12,
    fontSize: 12,
    color: colorScheme === 'dark' ? '#aaa' : '#666',
  };

  const fallbackContainerStyle: React.CSSProperties = {
    flex: 1,
    flexDirection: 'row',
  };

  const fallbackLogoStyle: React.CSSProperties = {
    width: 60,
    height: '100vh',
  };

  const mainContent = (
    <View style={mainContentStyle as any}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarBackground: TabBarBackground,
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: TabIconHouse,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: TabIconPaper,
          }}
        />
      </Tabs>

      {/* Footer: blends with sidebar, always at bottom */}
      {Platform.OS === 'web' && (
        <div style={footerStyle}>
          <div style={footerLogoStyle} />
          <div style={footerCenterStyle}>© {new Date().getFullYear()} Cosmic Pony</div>
        </div>
      )}
    </View>
  );

  if (SidebarAvailable) {
    return (
      <SidebarModule.SidebarProvider defaultOpen={false}>
        <div style={sidebarWrapperStyle}>
          <SidebarModule.Sidebar side="left" collapsible={'icon'} variant="sidebar">
            <div style={sidebarInnerColumnStyle}>
              <SidebarModule.SidebarHeader>
                <SidebarModule.SidebarTrigger />
              </SidebarModule.SidebarHeader>
              <SidebarModule.SidebarContent>
                <div style={sidebarPadding12Style}>
                  <NavBar collapsed={false} onToggle={() => {}} showToggle={false} />
                </div>
              </SidebarModule.SidebarContent>
              <SidebarModule.SidebarFooter>
                <div style={sidebarFooterTextStyle}>Cosmic Pony</div>
              </SidebarModule.SidebarFooter>
            </div>
          </SidebarModule.Sidebar>

          <SidebarModule.SidebarInset>{mainContent}</SidebarModule.SidebarInset>
        </div>
      </SidebarModule.SidebarProvider>
    );
  }

  // Fallback for non-web or if shadcn sidebar isn't available
  return (
    <View style={fallbackContainerStyle as any}>
      <div style={fallbackLogoStyle}>
        <NavBar collapsed={true} onToggle={() => {}} />
      </div>
      {mainContent}
    </View>
  );
}
