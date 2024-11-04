import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Platform, Text, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollableTable } from './ScrollableTable';
import { color } from 'highcharts';

const Tables = () => {

  const [employeeTableHead] = useState(['Employee ID', 'Name', 'Department', 'Role']);
  const [employeeTableData] = useState([
    ['101', 'John Doe', 'Engineering', 'Software Engineer'],
    ['102', 'Jane Smith', 'HR', 'HR Manager'],
    ['103', 'Samuel Green', 'Marketing', 'SEO Specialist'],
    ['104', 'Nina Brown', 'Finance', 'Accountant']
  ]);

  const salesTableHead = ['', 'Q1 Sales', 'Q2 Sales', 'Q3 Sales'];
  const salesTableTitle = ['Product A', 'Product B', 'Product C', 'Product D'];
  const salesTableData = [
    ['100', '150', '130'],  // Product A sales in Q1, Q2, Q3
    ['80', '90', '120'],    // Product B sales in Q1, Q2, Q3
    ['200', '180', '210'],  // Product C sales in Q1, Q2, Q3
    ['50', '75', '65']      // Product D sales in Q1, Q2, Q3
  ];




  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <Text style={styles.header}>Employee Table</Text>

      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={employeeTableHead} style={styles.head} textStyle={{ ...styles.text }} />
        <Rows data={employeeTableData} textStyle={{ ...styles.text }} />
      </Table>
      <Text style={styles.header}>Sales Table</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#abb1ba' }}>
        <Row data={salesTableHead} style={{ backgroundColor: '#095291' }} textStyle={{ ...styles.text, color:'#fff' }} flexArr={[1, 1, 1, 1]} />
        <TableWrapper style={styles.wrapper}>
          <Col data={salesTableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} />
          <Rows data={salesTableData} style={styles.row} flexArr={[1, 1, 1]} textStyle={styles.text} />
        </TableWrapper>
      </Table>
      <ScrollableTable/>

      {/* </ScrollView> */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // flex:1,
    height: '100%'
  },
  header: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },

  head: {
    ...Platform.select({
      ios: {
        height: 40,
      },
      android: {
        height: 55,
      }
    }),
    backgroundColor: '#BF868F'
  },
  text: {
    margin: 6,
    // color:'#d9cab2'

  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor:'#e6dfd5'
  },
  title: {
    flex: 1,
    backgroundColor: '#ad833e',
  },
  row: {
    height: 30,
  },
});
export default Tables;






