import { View, Text } from 'react-native'
import React from 'react'

export default function HotelDetails({ navigation, route }) {
    console.log(route.params);
  return (
    <View>
      <Text>HotelDetails</Text>
    </View>
  )
}