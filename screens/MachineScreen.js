import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MachineScreen() {

    const nav = useNavigation();
    function pressHandler(){
        nav.navigate('About');
    }

  return (
    <>
    <SafeAreaView/>
    <View>
      <Text>MachineScreen</Text>
      <Button title='Next Page' onPress={pressHandler}/>
    </View>
    </>
  )
}