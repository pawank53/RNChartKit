import { color } from 'highcharts';
import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';

export const ScrollableTable = () => {
    const scrollableTableHead = ['ID', 'Name', 'Age', 'Email', "Salary"];
    const scrollableTableWidthArr = [40, 100, 60, 200, 100];
    const scrollableTableData = [
        { id: 1, name: "Alice", age: 25, email: "alice@example.com", salary:786645 },
        { id: 2, name: "Bob", age: 30, email: "bob@example.com", salary:100000 },
        { id: 3, name: "Charlie", age: 35, email: "charlie@example.com", salary:2300000 },
        { id: 4, name: "David", age: 28, email: "david@example.com", salary:780000 },
        { id: 5, name: "Eve", age: 22, email: "eve@example.com",salary: 9870000 },
        // Add more entries as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Employee Table</Text>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row
                            data={scrollableTableHead}
                            widthArr={scrollableTableWidthArr}
                            style={styles.header}
                            textStyle={styles.text}
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                scrollableTableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={[rowData.id, rowData.name, rowData.age, rowData.email, rowData.salary]} // Access individual properties
                                        widthArr={scrollableTableWidthArr}
                                        style={[styles.row, index % 2 && { backgroundColor: '#FFF' }]}
                                        textStyle={[styles.text, {fontWeight:'300'}]}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        // padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },
    header: { 
        height: 50, 
        backgroundColor: '#c99a7f' 
    },
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
      },
    text: { 
        textAlign: 'center', 
        fontWeight: '100' ,
        color:'#000',
        fontWeight:'bold'
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 40, 
        backgroundColor: '#E7E6E1' 
    },
});
