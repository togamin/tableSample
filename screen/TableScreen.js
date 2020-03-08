import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

class TableScreen extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <FlatList
          data = {['フシギダネ','フシギソウ',`フシギバナ`,'ヒトカゲ','リザード','リザードン','ゼニガメ','カメール','カメックス']}
          renderItem = {({item}) => (
            <TouchableHighlight
              onPress={() => console.log("pushed")}
              underlayColor={'red'}
            >
              <View style = {styles.listItem}>
                <Text style = {styles.listTitle}>{item}</Text>
              </View>
            </TouchableHighlight>
          )} />
      </View>
    );
  }
}

//スタイルシート
const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
  },
  listItem:{
    padding:18,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    backgroundColor:'#fff',
  },
  listTitle:{
    fontSize:18,
  }
});

export default TableScreen;