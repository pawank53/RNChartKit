import React from "react";
import { SafeAreaView, Text, View, Dimensions, StyleSheet, ScrollView } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Charts = () => {

    const barCharData = {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', "Day5", "Day6"],
        datasets: [
            {
                data: [0, 4, 8, 0, 9, 3],
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color for the dataset
                strokeWidth: 2 // optional
            }
        ]
    };

    const pieChartData = [
        {
            name: "Samsung",
            marketShare: 21.6, // in percentage
            color: "rgba(66, 135, 245, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Apple",
            marketShare: 17.2, // in percentage
            color: "#A4C639",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Xiaomi",
            marketShare: 12.7, // in percentage
            color: "#FF6F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Oppo",
            marketShare: 10.1, // in percentage
            color: "#00C853",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Vivo",
            marketShare: 8.6, // in percentage
            color: "rgb(123, 31, 162)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Others",
            marketShare: 29.8, // in percentage
            color: "#B0BEC5",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ]


    return (
        <ScrollView>
            <View>
                <Text style={styles.header}>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [23, 12, 43, 32, 27, 30],
                                color: (opacity = 1) => `rgba(47, 130, 130, ${opacity})` //color of curve
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    verticalLabelRotation={0} // rotate the labels
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={2} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: '#b7f7f7', //'#f2fafa',
                        backgroundGradientFrom: '#5ef7f7',
                        backgroundGradientTo: "#88ebeb",
                        decimalPlaces: 0, //optional,  to add decimal place in levels 
                        color: (opacity = 1) => `rgba(11, 37, 69, ${opacity})`, // ghera huaa area color
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "4", // radius of dots
                            strokeWidth: "5", // stokes on the dots i.e circle on dots
                            stroke: "#034c54" // color of the circle on the dots
                        }
                    }}
                    bezier // line will be curved
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <View>
                <Text style={styles.header}>Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["Java", "Python", "C#", "C", "Javascript", "C++"],
                        datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43, 50],
                                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color for the first dataset
                                strokeWidth: 2 // optional
                            },
                            {
                                data: [30, 60, 40, 70, 88, 40, 60],
                                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color for the second dataset
                                strokeWidth: 2 // optional
                            },
                        ],
                        legend: ["Dataset 1", "Dataset 2"], // optional
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    verticalLabelRotation={0} // rotate the labels
                    yAxisLabel=""
                    yAxisSuffix="M"
                    yAxisInterval={2} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#edb066",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <View>
                <Text style={styles.header}>Progress Chart</Text>
                <ProgressChart
                    data={{
                        labels: ["Leetcode", "GFG", "GitHub"],
                        data: [0.4, 0.6, 0.8],
                        colors: ['#FF5733', '#33FF57', '#3357FF'] // Array of colors for each section
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={{
                        backgroundColor: '#a2f28a',
                        backgroundGradientFrom: '#7fc46a',
                        backgroundGradientTo: "#41f00c",
                        decimalPlaces: 0, //optional,  to add decimal place in levels 
                        color: (opacity = 1) => `rgba(11, 37, 69, ${opacity})`, // ghera huaa area color
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "4", // radius of dots
                            strokeWidth: "5", // stokes on the dots i.e circle on dots
                            stroke: "#034c54" // color of the circle on the dots
                        }
                    }}
                    hideLegend={false}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <View>
                <Text style={styles.header}>Bar Chart</Text>
                <BarChart
                    data={barCharData}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    verticalLabelRotation={0} // rotate the labels
                    yAxisLabel=""
                    yAxisSuffix="Q"
                    fromZero
                    chartConfig={{
                        backgroundColor: "#3d51d9",
                        backgroundGradientFrom: "#0223f7",
                        backgroundGradientTo: "#8f9df7",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    showValuesOnTopOfBars={true}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <View>
                <Text style={styles.header}>Stacked Bar chart</Text>
                <StackedBarChart
                    data={{
                        labels: ["January", "February", "March"],
                        legend: ["HR", "Marketing", "Sales", "IT"],
                        data: [
                            [10, 15, 20, 25],
                            [12, 14, 18, 22],
                            [11, 16, 17, 23],
                        ],
                        barColors: ["#cfc6ca", "#ced6e0", "#a4b0be", "#c4c0c2"]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: "#f57fb0",
                        backgroundGradientFrom: "#ed3481",
                        backgroundGradientTo: "#a30346",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 6,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 8
                    }}
                />
            </View>
            <View>
                <Text style={styles.header}>Pie Chart</Text>
                <PieChart
                    data={pieChartData}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    accessor={"marketShare"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 10]}
                    absolute
                    chartConfig={{
                        backgroundColor: "#f57fb0",
                        backgroundGradientFrom: "#ed3481",
                        backgroundGradientTo: "#a30346",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        // style: {
                        //     borderRadius: 6,
                        // },
                        
                    }}
                    // style={{
                    //     marginVertical: 8,
                    //     borderRadius: 8
                    // }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        color: '#000000',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
export default Charts;