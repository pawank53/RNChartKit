
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Charts from './src/component/Charts';



function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Charts/>
    </SafeAreaView>
  );
}


export default App;
