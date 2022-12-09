import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import hotelActions from "../redux/actions/hotelsActions";
import { useDispatch, useSelector } from "react-redux";


export default function Hotels({ navigation: { navigate } }) {
  const [hotels, setHotels] = useState([]);
  const [text, setText] = useState("");
  const { width, height } = Dimensions.get("screen");
  let values = {
    search: text,
    select: "",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hotelActions.getHotelsFilt(values))
      .then((res) => setHotels(res.payload.listHotelsFilt))
      .catch((err) => err);
  }, [text]);
  const onChangeText = (e) => {
    setText(e);
  };
  const style = StyleSheet.create({
    searchInput: {
      backgroundColor: "#fff",
      padding: 5,
      borderRadius: 5,
      width: "40%",
      textAlign: "center",
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fecea8ff",
      height,
      width,
    },
    hotelConteiner: {
      flex: 1,
      marginTop: 10,
    },
    hotelCard: {
      textAlign: "center",
      backgroundColor: "#e84a5f",
      marginTop: 20,
      padding: 5,
      borderRadius: 5,
      shadowColor: "#2a363bff",
      shadowOffset: { width: 7, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 6,
    },
    h3: {
      textAlign: "center",
    },
  });

  // console.log(hotels);c
  const renderItemHotels = ({ item }) => {
    return (
      <View style={style.hotelCard}>
        <Text style={style.h3}>{item.name}</Text>
        <Image
          style={{ height: 200, width: 350, marginTop: 10 }}
          source={{ uri: item.photo[0] }}
        />
        <Button title="Details" onPress={() =>
          navigate('HotelDetails',{id: item._id})
        }/>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Text>Hotels</Text>

      <TextInput
        style={style.searchInput}
        placeholder="Search..."
        onChangeText={onChangeText}
        value={text}
      />
      {hotels.length === 0 ? (
        <Text>Hotel Not Found</Text>
      ) : (
        <SafeAreaView style={style.hotelConteiner}>
          <FlatList
            data={hotels}
            renderItem={renderItemHotels}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      )}
    </View>
  );
}
