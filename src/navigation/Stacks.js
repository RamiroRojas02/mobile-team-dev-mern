import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelDetails from '../screens/HotelDetails';
import MyTabs from './MyTabs';

export default function Stacks() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stacks.Screen name="myTabs" component={MyTabs}/>
        <Stack.Screen name="HotelDetails" component={HotelDetails}/>
    </Stack.Navigator>
  )
}