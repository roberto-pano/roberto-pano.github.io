import Collapsible from "./components/Collapsible";
import ExternalLink from "./components/ExternalLink";
import HelloWave from "./components/HelloWave";
import ThemedText from "./components/ThemedText";
import ThemedView from "./components/ThemedView";
import IconSymbol from "./components/ui/IconSymbol";

import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 24,
          gap: 32,
        }}
      >
        <HelloWave />
        <Collapsible title="Collapsible Example">
          <ThemedText>This is inside the collapsible component.</ThemedText>
        </Collapsible>
        <ExternalLink href="https://github.com/roberto-pano" style={{ marginTop: 32 }}>
          Visit my GitHub
        </ExternalLink>
        <ThemedView style={{ marginTop: 16, padding: 8 }}>
        </ThemedView>
      </ScrollView>
    </View>
  );
}
