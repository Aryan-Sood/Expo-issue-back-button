import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const nav = useNavigation();

  function pressHandler(){
    nav.navigate('Machine');
  }

  return (
    <>
    <SafeAreaView/>
    <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
      <Text>This is the home page</Text>
      <Button title='Next Page' onPress={pressHandler} />
    </View>
    </>
  )
}