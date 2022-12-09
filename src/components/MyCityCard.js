import { View, Text,Image, Button ,StyleSheet} from 'react-native'
import React from 'react'

export default function MyCityCard(props) {
    let {name, photo,population, continent,id}=props


    const style = StyleSheet.create({
      myCardImage:{
        width:200,
        borderRadius:15,
        height: 200,
        resizeMode:"cover"
      },
      cardCity:{
        backgroundColor:"#e84a5f",
        padding:10,
        width:250,
        marginBottom:35,
        marginTop:30,
        marginHorizontal:55,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"red",
        borderRadius:10,
        borderWidth:1
      },
      myCardBtn:{
          
            }
    });

  return (
    <View style={style.cardCity} id={id}>
      <Image style={style.myCardImage} source={{uri: photo }}/>
      <Text style={style.myCardH4}>{name}</Text>
      <Text style={style.myCardH4}>Population of {population}</Text>
      <Text style={style.myCardH4}>Continent: {continent}</Text>
      <Button title='Details' color="#2a363b" style={style.myCardBtn}/>
    </View>
  )
}
