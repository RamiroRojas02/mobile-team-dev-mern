import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelsActions from "../redux/actions/hotelsActions";
import axios from "axios";
import apiUrl from "../../url";

export default function HotelDetails({ navigation, route }) {
  const [hotel, setStateHotel] = useState([]);
  const { width, height } = Dimensions.get("screen");

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${apiUrl}/hotels/${route.params.id}`)
      .then((response) => {
        setStateHotel(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const style = StyleSheet.create({
    container: {
      backgroundColor: "#fecea8ff",
      alignItems:"center",
      height,
      width,
      paddingTop:10
    },
    hotelDetails: {
      backgroundColor: "#e84a5f",
      marginTop: 20,
      width: 350,
      height: "45%",
      borderRadius:5      
    },
    title:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold",
        padding:5,
        backgroundColor:"#2a363bff",
        color:"#e84a5f"
        
    },
    description:{
        padding:10,
        fontSize:15,
    },
    capacity:{
        textAlign:"center",
        padding: 10,
        fontSize:15
        
    },

    image: {
      width: 350,
      // borderRadius:20,
      height: "100%",
      resizeMode: "cover",
    },
    goBack:{

    }
  });
  const renderItemHotels = ({ item }) => (
    <Image style={style.image} source={{ uri: item }} />
  );
  return (
    <View style={style.container}>
      <Button color={"#2a363bff"} title="Go back" onPress={() => navigation.goBack()} />
      <View style={style.hotelDetails}>
        <Text style={style.title}>{hotel.name}</Text>
        <FlatList
          data={hotel.photo}
          renderItem={renderItemHotels}
          keyExtractor={(item, index) => index}
          horizontal={true}
          pagingEnabled
        />
        <Text style={style.description}>Description: {hotel.description}</Text>
        <Text style={style.capacity}>Capacity: {hotel.capacity}</Text>
      </View>
    </View>
  );
}
