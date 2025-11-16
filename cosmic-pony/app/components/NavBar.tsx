import React from 'react';
import { Platform } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'About', href: '/about' },
];

export default function NavBar({
  collapsed,
  onToggle,
  overlay: _overlay,
  showToggle = true,
}: {
  collapsed: boolean;
  onToggle: () => void;
  overlay?: boolean;
  showToggle?: boolean;
}) {
  const colorScheme = useColorScheme();
  const isWeb = Platform.OS === 'web';

  if (!isWeb) {
    return null;
  }

  // Use inline styles for web-specific full height and layout
  const sidebarStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: collapsed ? 60 : 220,
    height: '100vh',
    background: colorScheme === 'dark' ? '#222' : '#fff',
    borderRight: `1px solid ${colorScheme === 'dark' ? '#333' : '#eee'}`,
    paddingTop: 32,
    paddingBottom: 32,
    zIndex: 1,
    boxSizing: 'border-box',
  };

  const arrowButtonStyle: React.CSSProperties = {
    alignSelf: 'center',
    marginBottom: 24,
    background: 'transparent',
    border: 0,
    padding: 8,
    cursor: 'pointer',
    fontSize: 22,
    color: colorScheme === 'dark' ? '#fff' : '#222',
  };

  const logoStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: 24,
    color: colorScheme === 'dark' ? '#fff' : '#222',
    marginBottom: 32,
    alignSelf: 'center',
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 16,
  };

  const linkStyle: React.CSSProperties = {
    color: colorScheme === 'dark' ? '#fff' : '#222',
    fontSize: 18,
    margin: '8px 0',
    padding: '8px 0',
    borderRadius: 6,
    textAlign: 'left',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const collapsedLinksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 24,
    width: '100%',
  };

  const collapsedLinkStyle: React.CSSProperties = {
    color: colorScheme === 'dark' ? '#fff' : '#222',
    fontSize: 20,
    margin: '12px 0',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
  };

  return (
    <div style={sidebarStyle}>
      {/* Arrow button toggles sidebar. Can be hidden when an external trigger (SidebarTrigger) controls the sidebar. */}
      {showToggle && (
        <button onClick={onToggle} style={arrowButtonStyle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          {collapsed ? '→' : '←'}
        </button>
      )}
      {/* Logo and links only visible when expanded */}
      {!collapsed && (
        <>
          <div style={logoStyle}>Cosmic Pony</div>
          <div style={linksContainerStyle}>
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                style={linkStyle}
                onClick={() => {
                  if (isWeb) {
                    window.location.href = link.href;
                  }
                }}
                role="link"
                tabIndex={0}
              >
                {link.label}
              </div>
            ))}
          </div>
        </>
      )}
      {/* When collapsed, show only icons or initials for links (optional) */}
      {collapsed && (
        <div style={collapsedLinksContainerStyle}>
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              style={collapsedLinkStyle}
              onClick={() => {
                if (isWeb) {
                  window.location.href = link.href;
                }
              }}
              role="link"
              tabIndex={0}
            >
              {link.label[0]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
