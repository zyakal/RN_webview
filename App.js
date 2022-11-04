import { Platform, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
  return Platform.OS === "web" ? (
    <iframe src="http://192.168.0.115:3000/" height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://192.168.0.115:3000/" }}
        style={{ marginTop: 22, flex: 1 }}
      />
    </View>
  )
} 