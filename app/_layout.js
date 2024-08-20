import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import MachineScreen from '../screens/MachineScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Machine" component={MachineScreen} options={{title: 'Machine'}} />
      <Stack.Screen name='About' component={AboutScreen} options={{title:'About'}} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown:false ,title: 'Home' , tabBarLabel:'Home' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:true ,tabBarLabel: 'Explore'}} />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
