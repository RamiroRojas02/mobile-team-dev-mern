import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelDetails from '../screens/HotelDetails';
import Hotels from '../screens/Hotels';

export default function StacksHotels() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Hotel" component={Hotels}/>
        <Stack.Screen name="HotelDetails" component={HotelDetails}/>
    </Stack.Navigator>
  )
}