import { Platform, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
  return Platform.OS === "web" ? (
    <iframe src="https://jcidg.com/" height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://jcidg.com/" }}
        style={{ marginTop: 22, flex: 1 }}
      />
    </View>
  )
} 