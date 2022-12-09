import { View, Text,Image, Button ,StyleSheet} from 'react-native'
import React from 'react'

export default function MyCityCard(props) {
    let {name, photo,population, continent,id}=props
  return (
    <View style={StyleSheet.cardCity} id={id}>
      <Image style={StyleSheet.myCardImage} source={photo}/>
      <Text style={StyleSheet.myCardH4}>{name}</Text>
      <Text style={StyleSheet.myCardH4}>Population of {population}</Text>
      <Text style={StyleSheet.myCardH4}>Continent: {continent}</Text>

      <Button on>Details</Button>
    </View>
  )
}