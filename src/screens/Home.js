import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelsActions from "../redux/actions/hotelsActions";
import { useState } from "react";
import cityActions from "../redux/actions/cityActions";


export default function Home() {
  const [hotels, setHotels] = useState(null);
  const [cities, setCities] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hotelsActions.getHotels())
      .then((res) => setHotels(res.payload.listHotels))
      .catch((err) => err);
    // axios.get(`${apiUrl}/hotels`)
    dispatch(cityActions.getCity())
      .then((res) => setCities(res.payload))
      .catch((err) => err);
  }, []);
  const { width, height } = Dimensions.get("screen");
  const styles = StyleSheet.create({
    tinyLogo: {
      width: 200,
      height: 200,
    },
    titulo: {
      color:"#e84a5f",
      fontWeight: "bold",
      fontSize: 17,
    },
    image: {
      width:300,
      borderRadius:20,
      height: "100%",
      resizeMode:"cover"
      
    },

    carrousel: {
      width: 300,
      height: "35%",
      
    
    },
    title:{
      textAlign:"center",
      fontSize: 20,
      color:"#e84a5f",
      fontWeight: "bold"
      
    },
    Home: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fecea8ff",
      height,
      width,
    },
  });

  const renderItemHotels = ({ item }) => (
    
      <Image style={styles.image} source={{ uri: item.photo[0] }} />
   
  );
  const renderItemCities = ({ item }) => (
    
    <Image style={styles.image} source={{ uri: item.photo }} />
 
);

  return (
    <ScrollView>
      <View style={styles.Home}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/My_Tinerary.png")}
        />
        <Text style={styles.titulo}>Explore the world and live the best sensations</Text>
        <SafeAreaView style={styles.carrousel}>
          <Text style={styles.title} >Cities</Text>
          <FlatList
            data={cities}
            renderItem={renderItemCities}
            keyExtractor={(item) => item._id}
            horizontal={true}
            pagingEnabled
            
            
          />
        </SafeAreaView>
        <SafeAreaView style={styles.carrousel}>
          <Text style={styles.title} >Hotels</Text>
          <FlatList
            data={hotels}
            renderItem={renderItemHotels}
            keyExtractor={(item) => item._id}
            horizontal={true}
            pagingEnabled
            
            
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
