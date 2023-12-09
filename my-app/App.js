import * as React from 'react';
import { WebView } from 'react-native-webview';
import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  
    return Platform.OS ==="web"? (
      <iframe src = "https://cigarate.netlify.app/" height={"100%"} width={'100%'} />
      ) : (<WebView
        source={{ uri: 'https://cigarate.netlify.app/' }}/>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
