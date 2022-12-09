import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import MyCityCard from "../components/MyCityCard";

export default function Cities() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const {getCityFilter } = cityActions;
  let [city, setCity] = useState([]);
  let valores = {};
  useEffect(() => {
    dispatch(getCityFilter(valores))
    .then((res) => {setCity(res.payload.city);});
  }, [value]);
  valores = {
    continente: "&continent=",
    value: value,
  };
  //filtrado por busqueda
  let [search, setSearch] = useState();
  let filter = () => {
    setValue("&name=" + search);
  };
  return (
    <View style={styles.cityScreen}>
      <ScrollView style={styles.scrollGral}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            id="searchCity"
            onChangeText={setSearch}
            type="search"
            value={search}
            onChange={filter}
            placeholder="Search your city"
          ></TextInput>
        </View>
        <View style={styles.citiesContainer}>
          {city.length === 0 ? (
            <Text style={styles.notFound}>No Cities found</Text>
          ) : (
            city.map((e, index) => (
              <MyCityCard
                name={e.name}
                photo={e.photo}
                population={e.population}
                id={e._id}
                key={index}
                continent={e.continent}
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  notFound:{
    height:800,
    width:360,
    flex:1,
    justifyContent:"center",
    textAlign:"center",
    borderWidth:1,
  },
  cityScreen: {
    flex: 1,
    width: 1000,
    height: 1000,
  },inputView:{
    height:40,
    backgroundColor:"grey",
    color:"white"
  },input:{
    height:40,
    backgroundColor:"grey",
    color:"white"
  },
  scrollGral:{
    width:"100%",
    height:"100%"
  },
  h1Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  citiesContainer: {
    backgroundColor: "#fecea8",
  },

});
