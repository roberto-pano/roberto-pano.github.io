import ExpoRouter from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof ExpoRouter.Link>, 'href'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const Link = ExpoRouter?.Link as any;
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event: any) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}

export default ExternalLink;
