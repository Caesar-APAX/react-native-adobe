import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const url: string = 'https://vitejs.cn/vite5-cn/';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1}}>
        <WebView
          originWhitelist={['*']}
          javaScriptEnabled={true}
          source={{uri: url}}
          style={styles.webView}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default App;
