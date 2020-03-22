import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

const pokeData = [
  {id:"0",name:"フシギダネ"},
  {id:"1",name:"フシギソウ"},
  {id:"2",name:"フシギバナ"},
  {id:"3",name:"ヒトカゲ"},
  {id:"4",name:"リザード"},
  {id:"5",name:"リザードン"},
  {id:"6",name:"ゼニガメ"},
  {id:"7",name:"カメール"},
  {id:"8",name:"カメックス"}
]

export default function TableScreen() {
  return(
    <SafeAreaView style = {styles.container}>
      <FlatList
        data = {pokeData}
        renderItem = {({item}) => (
          <TouchableHighlight
            onPress={() => console.log(item)}
            underlayColor={'red'}
          >
            <View style = {styles.listItem}>
              <Text style = {styles.listTitle}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={pokeData => pokeData.id}
        />
    </SafeAreaView>
  );
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