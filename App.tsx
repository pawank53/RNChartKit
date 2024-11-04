
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Charts from './src/component/Charts';
import HighCharts from './src/highcharts/HighCharts';
import Tables from './src/tables/Tables';



function App(): JSX.Element {
  const [showChartKit, setShowChartKit] = useState(false)
  const [showHighChart, setShowHighChart] = useState(false)
  
  const onRNChartKit = () => {
    setShowChartKit(false)
  }

  const onHighChart = () => {
    setShowHighChart(state => !state)
  }

  return (
    <SafeAreaView>
      {/* <View>
        <TouchableOpacity onPress={onRNChartKit} >
          <Text>RN Chart Kit</Text>
        </TouchableOpacity>
      </View>
      {showChartKit ? <Charts /> : (
        <View>
          <TouchableOpacity onPress={onHighChart} >
            <Text>High Charts</Text>
          </TouchableOpacity>
          <HighCharts/>
        </View>
      )} */}
      <View>
          {/* <TouchableOpacity onPress={onHighChart} >
            <Text>Tables</Text>
          </TouchableOpacity> */}
          <Tables/>
        </View>
    </SafeAreaView>
  );
}


export default App;
