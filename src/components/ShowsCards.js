import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import commentActions from "../redux/actions/commentActions";

export default function ShowsCards({ item }) {
  const { width, height } = Dimensions.get("screen");
  const stringDate = item.date.toString().slice(0, 10);
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    dispatch(commentActions.getComments(item._id))
      .then((res) => setComments(res.payload.comments))
      .catch((err) => err);
  }, []);

  const style = StyleSheet.create({
    conteinerShow: {
      backgroundColor: "#99b898",
      marginTop: 25,
      width: "80%",
      height: "auto",
      borderRadius: 15,
      padding: 10,
    },
    image: {
      width: 300,
      height: 200,
      resizeMode: "contain",
    },
    date: {
      textAlign: "center",
      fontWeight: "bold",
    },
    title: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
      padding: 5,
      backgroundColor: "#2a363bff",
      color: "#e84a5f",
    },
    price: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
    },
    commentTitle: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
    },
    commentSection: {
      marginTop: 5,
      backgroundColor: "#ff847cff",
      borderRadius:5
    },
    textInput:{
      textAlign:"center"
    },
    comments:{
      flex:1,
      marginTop:5,
      padding:5
    }
  });

  return (
    <View style={style.conteinerShow}>
      <Text style={style.title}>{item.name}</Text>
      <Image style={style.image} source={{ uri: item.photo }} />
      <Text style={style.date}>Date: {stringDate}</Text>
      <Text>Description: {item.description}</Text>
      <Text style={style.price}>Price :{item.price}</Text>
      <SafeAreaView style={style.commentSection}>
        <Text style={style.commentTitle}>Comments</Text>
        {comments.length === 0 ? (
          <View>
            <View>
              <TextInput style={style.textInput} placeholder="Type a comment"></TextInput>
            </View>
            <Text style={style.commentTitle}>No Comments</Text>
          </View>
        ) : (
          <View>
            <View>
              <TextInput style={style.textInput} placeholder="Type a comment"></TextInput>
            </View>
            {comments.map((item) => (
              <View key={item._id} style={style.comments}>
                <Text>{item.userId.name}:</Text>
                <Text>{item.comment}</Text>
              </View>
            ))}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
