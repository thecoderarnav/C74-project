import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import db from '../config'

export default class Searchscreen extends React.Component {
  constuctor(props){
    super (props)
      this.state={
        allTransactions:[]
    }
  }
  componentDidMount = async()=>{
const query= await db.collection('Transactions').get()
query.docs.map((doc)=>{
  this.setState({
    allTransactions:[..this.state.allTransactions, doc.data()]
  })
})
  }

    render() {
      return (
        <ScrollView>
          {
            this.state.allTransactions.map((transaction, index)=>{
              return (
<View key ={index}  style={{ borderBottomWidth: 2 }}>
  <Text>{"Book Id" + transaction.bookId}</Text>
  <Text>{"Student Id" + transaction.studentId}</Text>
  <Text>{"Transaction Type" + transaction.transactionType}</Text>
  <Text>{"Date" + transaction.date.toDate()}</Text>
              )
            })
   </ScrollView>         
   </View>
    });
    
  }